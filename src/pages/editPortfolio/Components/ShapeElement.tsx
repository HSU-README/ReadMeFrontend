import { ConnectingAirportsOutlined } from "@mui/icons-material";
import React, { useContext,useEffect,useRef } from "react";
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

const ShapeElement=(props:ICanvasComponent)=>{
    const {content, id, isReadOnly,dimension}= props;
    const {actions} = useContext(CanvasContext);
    const editorRef = useRef(null)

    const updateEditorValue = (value:string)=>{// 텍스트박스 내부 글자 수정 이벤트
        
        actions?.updateCanvasData({id,content:value});
    }
    useEffect(()=>{
      console.log(props)
    },[])
    const modules={
        toolbar:"#toolbar"
    };
    return (
      <>
        <div
          className="ql-editor"
          style={props.shapeStyle}
        >
        </div>
      </>
    );

}
export default ShapeElement
