import React, { useState } from 'react';
import CanvasContainer from '../CanvasContainer';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SaveElement from './SaveElement';
const DownloadPortfolio = () => {
  const [title, setTitle] = useState('');
  return (
    <div className="App container">
      <SaveElement />
    </div>
  );
};

export default DownloadPortfolio;
