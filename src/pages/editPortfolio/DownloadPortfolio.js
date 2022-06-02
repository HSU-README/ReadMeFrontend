import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ExportPdf from './DownloadPdf.js';
const DownloadPortfolio = () => {
  return (
    <div>
      <ExportPdf />
    </div>
  );
};

export default DownloadPortfolio;
