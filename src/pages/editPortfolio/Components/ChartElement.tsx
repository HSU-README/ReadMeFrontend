import React, { useEffect, useRef, useContext, useState } from 'react';
import { CanvasContext, ICanvasComponent } from '../CanvasContainer';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { chartState } from 'recoil/atoms';

const ChartElement = (props: ICanvasComponent) => {
  const { id, chart } = props;
  const [strArr, setStrArr] = useState(new Array(36).fill(''));
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(150);
  const { actions } = useContext(CanvasContext);
  const tableRef = useRef(null);
  const [text, setText] = useState('');
  // const [strArr, setStrArr] = useRecoilState(chartState);
  const chartRef = useRef(null);
  const ref = useRef(null);
  const updateChartValue = (value: string) => {
    // 텍스트박스 내부 글자 수정 이벤트
    //console.log(chartRef.current.innerHTML)
    actions?.updateCanvasData({
      id,
      chartContent: strArr.toString(),
    });
  };
  const resetState = useResetRecoilState(chartState);
  useEffect(() => {
    setWidth(Number(props.dimension.width)/chart.col);
    setHeight(Number(props.dimension.width)/chart.row);
    if (chart.tableContent) {
      setStrArr(chart.tableContent);
    }
    resetState();
    updateChartValue(chartRef.current.innerHTML);
  }, []);
  useEffect(()=>{
    if (props.dimension.width.indexOf('px') !== -1 && props.dimension.height.indexOf('px') !== -1) {
      
      setWidth(Number(props.dimension.width.slice(0, -2)) / chart.col);
      setHeight(Number(props.dimension.height.slice(0, -2)) / chart.row);
      if (chart.tableContent) {
        setStrArr(chart.tableContent);
      }
      resetState();
    }
  },[props.dimension.width,props.dimension.height])
  return (
    <>
      <div
        ref={chartRef}
        onClick={() => {
          updateChartValue(chartRef.current.innerHTML);
        }}
      >
        {
          <table style={{ border: '1px solid black' }} ref={tableRef}>
            <tbody>
              {Array(chart.row)
                .fill(null)
                .map((tr, index) => {
                  return (
                    <tr key={index}>
                      {Array(chart.col)
                        .fill(null)
                        .map((td, i) => {
                          return (
                            <td
                              style={{ border: '1px solid black', width: `${width}px`, height: `${height}px` }}
                              key={i}
                            >
                              <textarea
                                style={{ width: '100%',  height: '100%',resize:"none" }}
                                value={strArr[index * 6 + i]}
                                onChange={(e) => {
                                  let newStrArr = [...strArr];
                                  newStrArr[index * 6 + i] = e.target.value;
                                  setStrArr(newStrArr);
                                }}
                              ></textarea>
                            </td>
                          );
                        })}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        }
      </div>
    </>
  );
};

export default ChartElement;
