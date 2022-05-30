import React, { useState, useRef } from 'react';
import ShowPortfolio from './Editdocument';

const ExportPdf = () => {
  const componentRef = useRef(null);
  return (
    <div>
      <ShowPortfolio printRef={componentRef} />
    </div>
  );
};

export default ExportPdf;
