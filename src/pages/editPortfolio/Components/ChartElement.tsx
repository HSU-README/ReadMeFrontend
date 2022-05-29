import React, { useEffect, useRef, useContext, useState } from 'react';
import { CanvasContext, ICanvasComponent } from '../CanvasContainer';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { chartState } from 'recoil/atoms';

const ChartElement = (props: ICanvasComponent) => {
  const { id, chart } = props;
  const [strArr, setStrArr] = useState(new Array(36).fill(''));
  const [width, setWidth] = useState(150);
  const [height, setHeight] = useState(100);
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
    setWidth(150 / chart.col);
    setHeight(100 / chart.row);
    if (chart.tableContent) {
      setStrArr(chart.tableContent);
    }
    resetState();
  }, []);
  useEffect(()=>{
    console.log(props.dimension.width.slice(0,-2))
    console.log(chart.col)
    console.log(Number(props.dimension.width) / chart.col)
    setWidth(Number(props.dimension.width.slice(0,-2)) / chart.col);
    setHeight(Number(props.dimension.height.slice(0,-2)) / chart.row);
    if (chart.tableContent) {
      setStrArr(chart.tableContent);
    }
    resetState();
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
            <tbody style={{width:props.dimension.width, height:props.dimension.height}}>
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
                              style={{ border: '1px solid black', width: `${width}px`,resize:"none", height: `${height}px` }}
                              key={i}
                            >
                              <textarea
                                style={{ width: '100%',  height: '100%' }}
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
