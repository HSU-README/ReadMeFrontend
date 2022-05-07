import { ConnectingAirportsOutlined } from "@mui/icons-material";
import React, { useContext,useRef } from "react";
import ReactHtmlParser from "react-html-parser";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CanvasContext, ICanvasComponent } from "../CanvasContainer";
import { fontList, sizeList } from "./Toolbar";
import '../Canvas.css';
const Size = Quill.import("attributors/style/size");
Size.whitelist = sizeList

const Font = Quill.import("attributors/style/font");
Font.whitelist=fontList

Quill.register(Font,true)
Quill.register(Size,true)

const TextElement=(props:ICanvasComponent)=>{
    const {content, id, isReadOnly,dimension}= props;
    const {actions} = useContext(CanvasContext);
    const editorRef = useRef(null)

    const updateEditorValue = (value:string)=>{// 텍스트박스 내부 글자 수정 이벤트
        
        actions?.updateCanvasData({id,content:value});
    }

    const modules={
        toolbar:"#toolbar"
    };
    return(
        <>
            <div>
                {isReadOnly?(
                    <div
                        className="ql-editor"
                        style={{
                        fontFamily:"Arial",
                        fontSize:"13px",
                        padding:0
                    }}
                     >
                    {ReactHtmlParser(content||"")}
                 </div>

                ):(
                
                <ReactQuill
                    ref={editorRef}
                    readOnly={isReadOnly}
                    theme="snow"
                    className="quill-contaier"
                    modules={modules}
                    value={content}
                    onChange={updateEditorValue}
                />
                )}
            </div>
        </>
    )

}
export default TextElement