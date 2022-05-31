import React, { useState, useRef } from 'react';
import 'pages/generate/style.css';
import CanvasContainer from './CanvasContainer.tsx';
import Header from './Header';
import Footer from 'components/footer/index.jsx';
import DndComponent from './DndComponent';
import ReactToPrint from 'react-to-print';
import TagComponent from 'pages/editPortfolio/TagComponent';
import DNDImageComponent from './DNDImageComponent';
const EditPortfolio = () => {
  const [createElement, setCreateElement] = useState('');
  const canvasBox = useRef(null);
  return (
    <div style={{marginTop:"5px"}}>
      <Header />
      <div style={{ backgroundColor: '#e9ecef', display: 'flex' }}>
        <DNDImageComponent setCreateElement={setCreateElement} />
        <div style={{ display: 'flex'}}>
          <div ref={canvasBox}>
            <CanvasContainer isEditable={true} createElement={createElement} />
          </div>
          <DndComponent setCreateElement={setCreateElement} />
        </div>
      </div>
      <Footer />;
    </div>
  );
};

export default EditPortfolio;
