import React ,{useEffect,useRef,useContext,useState}from 'react';
import { CanvasContext, ICanvasComponent } from "../CanvasContainer";
import ContentEditable from "react-contenteditable";
import ShowPortfolio from '../EditPortfolio.js';
import ReactToPrint from 'react-to-print';

const SaveElement=(props:ICanvasComponent)=>{
  const componentRef = useRef(null);

  return (
      <>
      <div>
    <div className="toolbar-item" onClick={() => ("SAVE")}>
        저장&nbsp;&nbsp;&nbsp;&nbsp;| 
      </div>
      <ShowPortfolio printRef={componentRef} />
        </div>
      </>
  );
};

export default SaveElement;