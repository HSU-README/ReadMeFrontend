/* 
주석 작성일 : 2022-05-08
작성자 : 이찬우
파일명 : Toolbar.tsx
요약 : 상단 메뉴바 기능 출력및 설정
주소 : /editpofol
*/
import React ,{useEffect,useRef,useContext,useState}from 'react';
import { CanvasContext } from "../CanvasContainer";
import ReactToPrint from 'react-to-print';

export const sizeList = [
  "8px",
  "9px",
  "10px",
  "11px",
  "12px",
  "14px",
  "16px",
  "18px",
  "20px",
  "72px"
];

export const fontList = [
  "Arial",
  "Arial Black",
  "Arial Unicode MS",
  "Calibri",
  "Cambria",
  "Cambria Math",
  "Candara",
  `Segoe UI, wf_segoe-ui_normal, helvetica, arial, sans-serif`,
  "Comic Sans MS",
  "Consolas",
  "Constantia",
  "Corbel",
  "Courier New",
  "Georgia",
  "Lucida Sans Unicode",
  "Tahoma",
  "Times New Roman",
  "Trebuchet MS",
  "Verdana"
];

interface IToolbarProps {
  isEditEnable: boolean;
  canvasBox: any;
}

export default function Toolbar({ isEditEnable, canvasBox }: IToolbarProps) {

  console.log(canvasBox);
  const { actions } = useContext(CanvasContext);
  const addElement = (type: string) => {
    actions?.addElement(type);
  };

  return (
    <div style={{ display: "flex" }}>
      {isEditEnable && (
        <div id="toolbar">
          <select className="ql-font">
            {fontList.map((font) => (
              <option value={font}>{font}</option>
            ))}
          </select>
          <select className="ql-size">
            {sizeList.map((size) => (
              <option value={size}>{size}</option>
            ))}
          </select>
          <button className="ql-bold" />
          <button className="ql-italic" />
          <button className="ql-underline" />
          <select className="ql-align" />
          <select className="ql-color" />
          <select className="ql-background" />
        </div>
      )}
      <div className="toolbar-item" onClick={() => addElement("TEXT")}>
        텍스트&nbsp;&nbsp;&nbsp;&nbsp;| 
      </div>

      <div className="toolbar-item" onClick={() => addElement("IMAGE")}>
        이미지&nbsp;&nbsp;&nbsp;&nbsp;| 
      </div>


      <div className="toolbar-item" onClick={() => {
          addElement("CHART")}
          }>
        표&nbsp;&nbsp;&nbsp;&nbsp;| 
        </div>

     <div className="toolbar-item" onClick={() => addElement("SAVE")}>
        저장&nbsp;&nbsp;&nbsp;&nbsp;| 
      </div>

      <div>
        <ReactToPrint trigger={() => <button className="menuBtn">저장</button>} content={() => canvasBox.current} />
      </div>
   
      <div className="toolbar-item" onClick={() => addElement("HELP")}>
        도움말&nbsp;&nbsp;&nbsp;&nbsp;| 
      </div>
    </div>
  );
}
