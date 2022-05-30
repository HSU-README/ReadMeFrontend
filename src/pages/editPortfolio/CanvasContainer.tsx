import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import CanvasComponent from './components/canvascomponent';
import Toolbar from './components/Toolbar';
import './Canvas.css';
import { createPortfolio, getPortfolio } from 'apis/portfolioApi';
import html2canvas from 'html2canvas';
import { useRecoilState } from 'recoil';
import { chartState } from 'recoil/atoms';
export const CanvasContext = React.createContext<ICanvasContext>({});

export interface ICanvasData {
  component?: string;
  id?: string;
  position?: { top: number; left: number };
  dimension?: { width: string; height: string };
  chart?: { col: number; row: number };
  chartContent?: string;
  content?: string;
  type: string;
  shapeStyle: object;
}

export interface ICanvasComponent {
  position?: { top: number; left: number };
  dimension?: { width: string; height: string };
  chart?: { col: number; row: number; tableContent: any };
  chartContent?: string;
  content?: string;
  id?: string;
  type: string;
  isReadOnly?: boolean;
  shapeStyle?: object;
}

export interface ICanvasContext {
  state?: {
    canvasData: ICanvasData[];
    activeSelection: Set<string>;
    enableQuillToolbar: boolean;
  };
  actions?: {
    setCanvasData: React.Dispatch<React.SetStateAction<ICanvasData[]>>;
    setActiveSelection: React.Dispatch<React.SetStateAction<Set<string>>>;
    updateCanvasData: (data: Partial<ICanvasComponent>) => void;
    addElement: (type: string) => void;
    setEnableQuillToolbar: (state: boolean) => void;
  };
}

const getInitialData = (data: any[], type: string = 'TEXT') => {
  return {
    type: type,
    id: `${type}__${Date.now()}__${data.length}`,
    position: {
      top: 100,
      left: 100,
    },
    chart: {
      row: 0,
      col: 0,
    },
    chartContent: type === 'CHART' && '',
    dimension: {
      width: '300',
      height: type === 'TEXT' ? '50' : '150',
    },
    shapeStyle: {},
    content: type === 'TEXT' ? '두 번 클릭하여 텍스트를 입력하세요.' : '',
  };
};

const CanvasContainer = ({ isEditable, createElement }) => {
  const [canvasData, setCanvasData] = useState<ICanvasData[]>([]);
  const [activeSelection, setActiveSelection] = useState<Set<string>>(new Set());
  const canvasBox = useRef<HTMLDivElement>(null); //캔버스만 가지고있는 REF
  const [enableQuillToolbar, setEnableQuillToolbar] = useState<boolean>(false);
  const [docTitle, setDocTitle] = useState<String>('');
  const containerRef = useRef<HTMLDivElement>(null);
  const isSelectAll = useRef<boolean>(false);

  const { docId } = useParams();
  const userId = JSON.parse(localStorage.getItem('readme_userInfo')).id;

  const updateCanvasData = (data: Partial<ICanvasComponent>) => {
    const currentDataIndex = canvasData.findIndex((canvas) => canvas.id === data.id) ?? -1;

    const updatedData = { ...canvasData?.[currentDataIndex], ...data };

    var wid = updatedData.dimension.width.substring(0, 3);
    var hei = updatedData.dimension.height.substring(0, 3);
    //캔버스 밖으로 벗어나는거 방지.
    if (updatedData.position.left < 0) {
      updatedData.position.left = 0;
    }
    if (updatedData.position.top < 0) {
      updatedData.position.top = 0;
    }
    if (updatedData.position.left + Number(wid) > canvasBox.current.clientWidth) {
      updatedData.position.left = canvasBox.current.clientWidth - Number(wid);
    }
    if (updatedData.position.top + Number(hei) > canvasBox.current.clientHeight) {
      updatedData.position.top = canvasBox.current.clientHeight - Number(hei) - 100;
    }
    canvasData.splice(currentDataIndex, 1, updatedData);
    setCanvasData([...(canvasData || [])]);
  };

  useEffect(() => {
    if (Number(docId)) {
      async function fetchPortfolioData() {
        const datas = await getPortfolio(docId);
        //console.log("datas",datas)
        await setDocTitle(datas.title);
        const componentArray = new Array();
        let type, left, top, width, height, content, chartContent, row, col, imgUrl, iconUrl;
        let id = 1;
        await datas.components.map((component) => {
          //console.log(datas.components);
          type = component.type;
          left = component.x;
          top = component.y;
          width = component.width;
          height = component.height;
          row = component.tableRow;
          col = component.tableCol;
          switch (type) {
            case 'text':
              content = component.textContent;
              componentArray.push({
                id: 'TEXT__' + (++id).toString(),
                type: 'TEXT',
                position: { top: top, left: left },
                chartContent: {},
                dimension: { width: width.toString(), height: height.toString() },
                content: content,
              });
              break;

            case 'table':
              componentArray.push({
                id: 'CHART__' + (++id).toString(),
                type: 'CHART',
                position: { top: top, left: left },
                dimension: { width: width.toString(), height: height.toString() },
                chart: {
                  row: row,
                  col: col,
                  tableContent: component.tableContents.map((data) => {
                    return data.content;
                  }),
                },
                // chartContent:
              });
              break;

            case 'image':
              imgUrl = component.imgUrl;
              componentArray.push({
                id: 'IMAGE__' + (++id).toString(),
                type: 'IMAGE',
                position: { top: top, left: left },
                dimension: { width: width.toString(), height: height.toString() },
                content: imgUrl,
              });
              break;

            case 'icon':
              iconUrl = component.iconUrl;
              componentArray.push({
                id: 'IMOGE__' + (++id).toString(),
                type: 'IMOGE',
                position: { top: top, left: left },
                dimension: { width: width.toString(), height: height.toString() },
                content: iconUrl,
              });
              break;
          }
        });

        await setCanvasData(componentArray);
      }
      fetchPortfolioData();
    }
  }, []);

  useEffect(() => {
    if (createElement !== '') {
      var str = createElement.split(' ');
      addElement(str[0]);
    }
  }, [createElement]);

  const addElement = (type: string) => {
    const defaultData = getInitialData(canvasData, type);
    var row = 0;
    var col = 0;
    var url = '';
    if (type === 'CHART') {
      var row = Number(createElement.split(' ')[1]);
      var col = Number(createElement.split(' ')[2]);
    } else if (type === 'IMOGE') {
      url = createElement.split(' ')[1];
      defaultData.content = url;
    } else if (type === 'SHAPE') {
      if (createElement.split(' ')[1] === 'SQUARE') {
        defaultData.shapeStyle = Shape[0].style[0];
      }
    }
    defaultData.chart.row = row;
    defaultData.chart.col = col;
    setCanvasData([...canvasData, { ...defaultData, type: type ?? 'TEXT' }]);
    activeSelection.clear();
    activeSelection.add(defaultData.id);
    setActiveSelection(new Set(activeSelection));
    row = 0;
    col = 0;
  };

  const deleteElement = useCallback(() => {
    setCanvasData([
      ...canvasData.filter((data) => {
        if (data.id && activeSelection.has(data.id)) {
          activeSelection.delete(data.id);
          return false;
        }
        return true;
      }),
    ]);
    setActiveSelection(new Set(activeSelection));
  }, [activeSelection, canvasData]);

  const selectAllElement = useCallback(() => {
    isSelectAll.current = true;
    canvasData.map((data) => activeSelection.add(data.id || ''));
    setActiveSelection(new Set(activeSelection));
  }, [activeSelection, canvasData]);

  const context: ICanvasContext = {
    actions: {
      setCanvasData,
      setActiveSelection,
      updateCanvasData,
      addElement,
      setEnableQuillToolbar,
    },
    state: {
      canvasData,
      activeSelection,
      enableQuillToolbar,
    },
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Delete') {
        deleteElement();
      } else if (['a', 'A'].includes(event.key) && event.ctrlKey) {
        event.preventDefault();
        selectAllElement();
      }
    },
    [deleteElement, selectAllElement],
  );

  const outSideClickHandler = () => {
    isSelectAll.current = false;
    setActiveSelection(new Set());
  };

  const handleMouseDown = useCallback((event) => {
    if (!isSelectAll.current) {
      return;
    }

    outSideClickHandler();
    isSelectAll.current = false;
  }, []);

  const capture = () => {
    return html2canvas(document.getElementById('capture-div'));
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [handleKeyDown, handleMouseDown]);
  return (
    <div
      style={{
        width: '210mm',
        height: '330mm',
      }}
    >
      {/* {console.log('canvasData: ' + JSON.stringify(canvasData))} */}
      <Toolbar
        isEditEnable={enableQuillToolbar}
        canvasBox={canvasBox}
        createPortfolio={createPortfolio}
        userId={userId}
        canvasData={canvasData}
        docId={docId}
        docTitle={docTitle}
        isEditable={isEditable}
        capture={capture}
      />

      <div ref={canvasBox}>
        <CanvasContext.Provider value={context}>
          <div id="capture-div">
            {isEditable === false ? (
              <div
                className="canvas-container"
                style={{
                  pointerEvents: 'none',
                }}
              >
                {canvasData.map((canvas, key) => {
                  return <CanvasComponent key={key} {...canvas} />;
                })}
              </div>
            ) : (
              <div className="canvas-container">
                {canvasData.map((canvas, key) => {
                  return <CanvasComponent key={key} {...canvas} />;
                })}
              </div>
            )}
          </div>
        </CanvasContext.Provider>
      </div>
      <br />
    </div>
  );
};

export default CanvasContainer;
