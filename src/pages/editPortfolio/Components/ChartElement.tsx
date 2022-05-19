import React, { useEffect, useRef, useContext, useState } from 'react';
import { CanvasContext, ICanvasComponent } from '../CanvasContainer';
import { useRecoilState } from 'recoil';
import { chartState } from 'recoil/atoms';

const ChartElement = (props: ICanvasComponent) => {
  const { content, id, isReadOnly, dimension, chart, chartContent } = props;
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const { actions } = useContext(CanvasContext);
  const tableRef = useRef(null);
  const [text, setText] = useState('');
  const [strArr, setStrArr] = useRecoilState(chartState);
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

  useEffect(() => {
    setWidth(Number(props.dimension.width) / chart.col);
    setHeight(Number(props.dimension.height) / chart.row);
  }, []);
  useEffect(() => {
    console.log(strArr);
  }, [strArr]);
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
                              {/* <div style={{width:"100%" , height:"100%"}} contentEditable ref={ref}
                                            onInput={((value)=>{
                                                console.log(ref.current.innerText)
                                                strArr[index][i]= chartRef.current.innerText;
                                                updateChartValue(chartRef.current.innerHTML)
                                            })}
                                         >{strArr[index][i]}</div> */}
                              <textarea
                                style={{ width: '100%', resize: 'none', height: '100%' }}
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

        {/* <div
              className="ql-editor"
              style={{
                fontFamily: 'Arial',
                fontSize: '13px',
                padding: 0,
              }}
              ref={ref}
            >
              {ReactHtmlParser(str || '')}
            </div> */}
      </div>
    </>
  );
};

export default ChartElement;
