import { useState,useEffect,useRef } from "react";
import img1 from '../../assets/images/prevArrow.png';
const TextEditArea = ({bg}) => {
  const [backg,setBackg]= useState(bg);
  const ref= useRef(null)
  return (
    <>
      <div>
        <div className="wrap">
          <div className="editor show" ref={ref} style={{width:"210mm",height:"0mm"}} contenteditable="true" ></div>
        </div>
      </div>
    </>
  );
};

export default TextEditArea;
