import React, { useState, useRef } from 'react';
import ShowPortfolio from './EditPortfolio.js';
import ReactToPrint from 'react-to-print';

const ExportPdf = () => {
  const componentRef = useRef(null);
  return (
    <div>
      <center className="menuBar">
        <ReactToPrint trigger={() => <button className="menuBtn">저장</button>} content={() => componentRef.current} />
        <button className="menuBtn">|&nbsp;&nbsp;표</button>
        <button className="menuBtn">|&nbsp;&nbsp;파일 업로드</button>
        <button className="menuBtn">|&nbsp;&nbsp;도움말</button>
      </center>
      <ShowPortfolio printRef={componentRef} />
    </div>
  );
};

export default ExportPdf;
