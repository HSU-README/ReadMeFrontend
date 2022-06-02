import React, { useState, useRef } from 'react';
import 'pages/generate/style.css';
import CanvasContainer from './CanvasContainer.tsx';
import Header from './Header';
import Footer from 'components/footer/index.jsx';

const Preview = () => {
  const [createElement, setCreateElement] = useState('');
  const canvasBox = useRef(null);
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: '#f8f9fa' }}>
        <div style={{ display: 'flex', marginLeft: '30%' }}>
          <div ref={canvasBox}>
            <CanvasContainer isEditable={false} createElement={createElement} />
          </div>
        </div>
      </div>
      <Footer />;
    </div>
  );
};

export default Preview;
