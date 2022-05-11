import React, { useState, useRef } from 'react';
import ShowPortfolio from './EditPortfolio.js';
import ReactToPrint from 'react-to-print';

const ExportPdf = () => {
  const componentRef = useRef(null);
  return (
    <div>
      <ShowPortfolio printRef={componentRef} />
    </div>
  );
};

export default ExportPdf;
