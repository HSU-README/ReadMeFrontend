/* 
주석 작성일 : 2022-05-08
작성자 : 이찬우
파일명 : Toolbar.tsx
요약 : 상단 메뉴바 기능 출력및 설정
주소 : /editpofol
*/
import React, { useEffect, useRef, useContext, useState } from 'react';
import { CanvasContext } from '../CanvasContainer';
import ReactToPrint from 'react-to-print';
import { FormControl, Input, Checkbox, FormControlLabel } from '@mui/material';
export const sizeList = [
  '8px',
  '9px',
  '10px',
  '11px',
  '12px',
  '14px',
  '16px',
  '18px',
  '20px',
  '24px',
  '28px',
  '32px',
  '36px',
  '40px',
  '44px',
  '48px',
  '52px',
  '56px',
  '60px',
  '64px',
  '68px',
  '72px',
];

export const fontList = [
  'Arial',
  'Arial Black',
  'Arial Unicode MS',
  'Calibri',
  'Cambria',
  'Cambria Math',
  'Candara',
  `Segoe UI, wf_segoe-ui_normal, helvetica, arial, sans-serif`,
  'Comic Sans MS',
  'Consolas',
  'Constantia',
  'Corbel',
  'Courier New',
  'Georgia',
  'Lucida Sans Unicode',
  'Tahoma',
  'Times New Roman',
  'Trebuchet MS',
  'Verdana',
];

interface IToolbarProps {
  isEditEnable: boolean;
  canvasBox: any;
  createPortpolio: any;
  userId: any;
  canvasData: any;
  docId: any;
  docTitle: any;
}

export default function Toolbar({
  isEditEnable,
  canvasBox,
  createPortpolio,
  userId,
  canvasData,
  docId,
  docTitle,
}: IToolbarProps) {
  const [title, setTitle] = useState(docTitle);
  const { actions } = useContext(CanvasContext);
  const [visibleCheck, setVisibleCheck] = useState(true);
  const pageStyle = `{ size: 2.5in 4in }`;
  const addElement = (type: string) => {
    actions?.addElement(type);
  };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div style={{ width: '250mm', textAlign: 'left', margin: 'auto', marginTop: '20px', marginBottom: '10px' }}>
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
          <button className="ql-script" value="sub"></button>
          <button className="ql-script" value="super"></button>
          <button className="ql-list" value="ordered"></button>
          <button className="ql-list" value="bullet"></button>
        </div>
      )}
      <span>
        <img
          onClick={() => {
            console.log(canvasData);
            createPortpolio(userId, title, canvasData);
          }}
          src={require('../../../assets/images/saveIcon.png')}
          alt="저장"
          style={{ marginRight: '20px', width: '30px', height: '30px', cursor: 'pointer' }}
        ></img>
      </span>
      <span>
        {/*   <ReactToPrint pageStyle={pageStyle} trigger={() => <img src={require('../../../assets/images/exportPdf.png')} alt="출력" style={{width:"30px", height:"30px",cursor:'pointer'}}></img>} content={() => canvasBox.current} /> */}
        <ReactToPrint
          trigger={() => (
            <img
              src={require('../../../assets/images/exportPdf.png')}
              alt="출력"
              style={{ width: '30px', height: '30px', cursor: 'pointer' }}
            ></img>
          )}
          content={() => canvasBox.current}
        />
      </span>

      <FormControl variant="standard" style={{ marginLeft: '90px', width: '50%'}}>
        <Input
          value={title}
          placeholder="제목을 입력하세요."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </FormControl>
      <FormControlLabel
        value="start"
        style={{ marginLeft: '70px' }}
        control={
          <Checkbox
            defaultChecked={visibleCheck}
            onChange={(e) => {
              setVisibleCheck(e.target.checked);
            }}
          />
        }
        label="공개"
        labelPlacement="start"
      />
    </div>
  );
}
