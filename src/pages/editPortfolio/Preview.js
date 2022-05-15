import React, { useState,useRef } from 'react';
import 'pages/generate/style.css';
import CanvasContainer from './CanvasContainer.tsx';
import Header from './Header';
import Footer from 'components/footer/index.jsx';
import DndComponent from './DndComponent';
import ReactToPrint from 'react-to-print';
const Preview = () => {
  
  const [createElement, setCreateElement] = useState('');
  const canvasBox = useRef(null);
  return (
    <div>
      <Header />
      <div style={{backgroundColor:"lightgray"}}>
      <div style={{ display: 'flex',marginLeft:"35%"}} >
        <div  ref={canvasBox}>
            <CanvasContainer isEditable={false}createElement={createElement} />
          </div>
      </div>
      </div>
     
      <Footer />;
    </div>
  );
};

export default Preview;