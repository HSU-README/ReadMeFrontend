import React, { useCallback, useEffect, useRef, useState } from "react";
import CanvasComponent from "./Components/CanvasComponent";
import Toolbar from "./Components/Toolbar";
import './Canvas.css';
import './Components/SaveElement';

export const CanvasContext = React.createContext<ICanvasContext>({});

export interface ICanvasData {
  component?: string;
  id?: string;
  position?: { top: number; left: number };
  dimension?: { width: string; height: string };
  chart?:{col:number,row:number}
  chartContent?:string
  content?: string;
  type: string;
 
}

export interface ICanvasComponent {
  position?: { top: number; left: number };
  dimension?: { width: string; height: string };
  chart?:{col:number,row:number}
  chartContent?:string;
  content?: string;
  id?: string;
  type: string;
  isReadOnly?: boolean;
  
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

const getInitialData = (data: any[], type: string = "TEXT") => {
  return {
    type: type,
    id: `${type}__${Date.now()}__${data.length}`,
    position: {
      top: 100,
      left: 100
    },
    chart:{
      row:0,
      col:0,
    },
    chartContent:type==="CHART"&&"",
    dimension: {
      width: "300",
      height: type === "TEXT" ? "50" : "150"
    },
    content: type === "TEXT" ? "두 번 클릭하여 텍스트를 입력하세요." : ""
  };
};

const CanvasContainer = () => {
  const [canvasData, setCanvasData] = useState<ICanvasData[]>([]);
  const [activeSelection, setActiveSelection] = useState<Set<string>>(
    new Set()
  );
  const canvasBox= useRef<HTMLDivElement>(null); //캔버스만 가지고있는 REF
  const [enableQuillToolbar, setEnableQuillToolbar] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const isSelectAll = useRef<boolean>(false);

  const updateCanvasData = (data: Partial<ICanvasComponent>) => {
    const currentDataIndex =
      canvasData.findIndex((canvas) => canvas.id === data.id) ?? -1;
    
    const updatedData = { ...canvasData?.[currentDataIndex], ...data };
    console.log(updatedData)
    //캔버스 밖으로 벗어나는거 방지.
    if(updatedData.position.left< 0){
      updatedData.position.left=0
    }
    if(updatedData.position.top< 0){
      updatedData.position.top=0
    }
    if(updatedData.position.left+Number(updatedData.dimension.width) >= canvasBox.current.clientWidth){
      updatedData.position.left=canvasBox.current.clientWidth-Number(updatedData.dimension.width) 
    }
    if(updatedData.position.top+Number(updatedData.dimension.height) >canvasBox.current.clientHeight){
      updatedData.position.top= canvasBox.current.clientHeight-Number(updatedData.dimension.height)
    }
    canvasData.splice(currentDataIndex, 1, updatedData);
    setCanvasData([...(canvasData || [])]);
  };

  const addElement = (type: string) => {
    const defaultData = getInitialData(canvasData, type);
    var row=0
    var col=0
    if(type==="CHART"){
      row = Number(prompt('행을 입력해주세요'))
      col = Number(prompt('열을 입력해주세요'))
    }
    defaultData.chart.row=row;
    defaultData.chart.col=col;
    console.log(defaultData);
    setCanvasData([...canvasData, { ...defaultData, type: type ?? "TEXT" }]);
    activeSelection.clear();
    activeSelection.add(defaultData.id);
    setActiveSelection(new Set(activeSelection));
  };

  const deleteElement = useCallback(() => {
    setCanvasData([
      ...canvasData.filter((data) => {
        if (data.id && activeSelection.has(data.id)) {
          activeSelection.delete(data.id);
          return false;
        }
        return true;
      })
    ]);
    setActiveSelection(new Set(activeSelection));
  }, [activeSelection, canvasData]);

  const selectAllElement = useCallback(() => {
    isSelectAll.current = true;
    canvasData.map((data) => activeSelection.add(data.id || ""));
    setActiveSelection(new Set(activeSelection));
  }, [activeSelection, canvasData]);

  const context: ICanvasContext = {
    actions: {
      setCanvasData,
      setActiveSelection,
      updateCanvasData,
      addElement,
      setEnableQuillToolbar
    },
    state: {
      canvasData,
      activeSelection,
      enableQuillToolbar
    }
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Delete") {
        deleteElement();
      } else if (["a", "A"].includes(event.key) && event.ctrlKey) {
        event.preventDefault();
        selectAllElement();
      }
    },
    [deleteElement, selectAllElement]
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

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [handleKeyDown, handleMouseDown]);
  return (
    <div ref={null} style={{marginBottom:"50px", border:"1px solid red",width:"220mm", height:"310mm", marginLeft:"100px", marginRight:"10px"}}>
      <CanvasContext.Provider value={context}>
        <Toolbar isEditEnable={enableQuillToolbar} canvasBox={canvasBox} />
        <div className="canvas-container" ref={canvasBox} >
          {canvasData.map((canvas, key) => {
            return <CanvasComponent key={key} {...canvas} />;
          })}
        </div>
      </CanvasContext.Provider>
    </div>
  );
};

export default CanvasContainer;
