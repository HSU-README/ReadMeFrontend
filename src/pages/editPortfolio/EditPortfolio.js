import React, { useState, useRef } from 'react';
import 'pages/generate/style.css';
import CanvasContainer from './CanvasContainer.tsx';
import Header from './Header';
import Footer from 'components/footer/index.jsx';
import DndComponent from './DndComponent';
const EditPortfolio = () => {
  const [createElement, setCreateElement] = useState('');
  const canvasBox = useRef(null);
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: 'lightgray' }}>
        <div style={{ display: 'flex', marginLeft: '26%' }}>
          <div ref={canvasBox}>
            <CanvasContainer createElement={createElement} />
          </div>
          <DndComponent setCreateElement={setCreateElement} />
        </div>
      </div>
      <Footer />;
    </div>
  );
};

export default EditPortfolio;
