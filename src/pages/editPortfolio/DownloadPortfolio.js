import React, { useState } from 'react';
import EditPortfolio from './Editdocument.js';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ExportPdf from './DownloadPdf.js';
const DownloadPortfolio = () => {
  const [title, setTitle] = useState('');
  return (
    <div>
      <ExportPdf />
    </div>
  );
};

export default DownloadPortfolio;
