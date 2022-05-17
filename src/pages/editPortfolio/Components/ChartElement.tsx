import React ,{useEffect,useRef,useContext,useState}from 'react';
import { CanvasContext, ICanvasComponent } from "../CanvasContainer";
import ContentEditable from "react-contenteditable";
import ReactHtmlParser from "react-html-parser";
import { Filter } from '@mui/icons-material';

var strArr= Array.from(Array(6), () => new Array(6))
const dummyArr=Array.from(Array(6), () => new Array(6))
const ChartElement=(props:ICanvasComponent)=>{
    const {content, id, isReadOnly,dimension,chart,chartContent}= props;
    const [width,setWidth]=useState(0);
    const [height, setHeight]= useState(0);
    const [cContent,setCContent] = useState("");
    const {actions} = useContext(CanvasContext);
    const tableRef= useRef(null);
    const [text, setText]=  useState("")
    const chartRef= useRef(null);
    const ref = useRef(null);
    const updateChartValue = (value:string)=>{// 텍스트박스 내부 글자 수정 이벤트
        //console.log(chartRef.current.innerHTML)
       actions?.updateCanvasData({
           id,
           chartContent:chartRef.current.innerHTML
       })
    }
    
    useEffect(()=>{
        dummyArr[0][0]='dum1';
        dummyArr[0][1]='dum2';
        dummyArr[0][2]='dum3';
        dummyArr[0][3]='dum4';
        //str=chartContent
        setWidth(Number(props.dimension.width)/chart.col);
        setHeight(Number(props.dimension.height)/chart.row);
        strArr=dummyArr;
    },[])   
    useEffect(()=>{
            console.log(strArr)
    },[strArr])
    return (
      <>
        <div
          ref={chartRef}
          onClick={() => {
            updateChartValue(chartRef.current.innerHTML);
          }}
        >
         { <table style={{border:"1px solid black"}}  ref={tableRef}>
                    <tbody >
                    {
                        Array(chart.row).fill(null).map((tr,index)=>{
                            return <tr key={index}>
                                {
                                    Array(chart.col).fill(null).map((td,i)=>{
                                        return <td style={{border:"1px solid black" ,width:`${width}px`, height:`${height}px`}} key={i} >
                                         {/* <div style={{width:"100%" , height:"100%"}} contentEditable ref={ref}
                                            onInput={((value)=>{
                                                console.log(ref.current.innerText)
                                                strArr[index][i]= chartRef.current.innerText;
                                                updateChartValue(chartRef.current.innerHTML)
                                            })}
                                         >{strArr[index][i]}</div> */}
                                         <textarea style={{width:"100%",resize:"none",height:"100%"}} value={strArr[index][i]} onChange={(e)=>{
                                             //var str=strArr[index][i];
                                             
                                             strArr[index][i] = e.target.value;
                                             setText(strArr[index][i])
                                             //setText(e.target.value);
                                            
                                             console.log(text);
                                             console.log("str:",strArr[index][i])
                                             //strArr[index][i]=str;
                                         }}>
                                         </textarea>
                                          </td>
                                    })
                                }
                            </tr>
                        })
                    }
                    </tbody>

                </table> } 

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
}

export default ChartElement