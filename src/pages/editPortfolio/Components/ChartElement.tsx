import React ,{useEffect,useRef,useContext,useState}from 'react';
import { CanvasContext, ICanvasComponent } from "../CanvasContainer";
import ContentEditable from "react-contenteditable";

const ChartElement=(props:ICanvasComponent)=>{
    const {content, id, isReadOnly,dimension,chart,chartContent}= props;
    const [width,setWidth]=useState(0);
    const [height, setHeight]= useState(0);
    const {actions} = useContext(CanvasContext);
    const tableRef= useRef(null);
    const [text, setText]= useState("")
    const chartRef= useRef(null);
    const updateChartValue = (value:string)=>{// 텍스트박스 내부 글자 수정 이벤트
       actions?.updateCanvasData({
           id,
           chartContent:value
       })
    }


    useEffect(()=>{
        setWidth(Number(props.dimension.width)/chart.col);
        setHeight(Number(props.dimension.height)/chart.row)
    },[])   

    return(
        <>
            <div ref={chartRef} >
                <table style={{border:"1px solid black"}}  ref={tableRef}>
                    <tbody >
                    {
                        Array(chart.row).fill(null).map((tr,index)=>{
                            return <tr key={index}>
                                {
                                    Array(chart.col).fill(null).map((td,i)=>{
                                        return <td style={{border:"1px solid black" ,width:`${width}px`, height:`${height}px`}} key={i} >
                                         <div style={{width:"100%" , height:"100%"}} contentEditable 
                                            onInput={((value)=>{
                                                console.log(chartRef.current.innerHTML)
                                                updateChartValue(chartRef.current.innerHTML)
                                            })}
                                         />
                                          </td>
                                    })
                                }
                            </tr>
                        })
                    }
                    </tbody>

                </table>
            </div>
        </>
    )
}

export default ChartElement