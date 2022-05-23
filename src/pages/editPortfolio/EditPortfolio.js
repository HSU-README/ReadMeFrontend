import React, { useState, useRef } from 'react';
import 'pages/generate/style.css';
import CanvasContainer from './CanvasContainer.tsx';
import Header from './Header';
import Footer from 'components/footer/index.jsx';
import DndComponent from './DndComponent';
import ReactToPrint from 'react-to-print';
import TagComponent from 'pages/editPortfolio/TagComponent';
const EditPortfolio = () => {
  const [createElement, setCreateElement] = useState('');
  const canvasBox = useRef(null);
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: 'lightgray', display: 'flex' }}>
        <TagComponent />
        <div style={{ display: 'flex',marginLeft:"1%"}}>
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
