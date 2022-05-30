import React, { useContext, useRef, useEffect } from 'react';
import { CanvasContext, ICanvasComponent } from '../CanvasContainer';
import '../Canvas.css';
const ImogeElement = (props: ICanvasComponent) => {
  const { content, id } = props;
  const { actions } = useContext(CanvasContext);
  const uploadRef = useRef<HTMLInputElement>(null);
  const imogeRef = useRef<HTMLDivElement>(null);
  const getBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const getImageDimensions = async (file: string): Promise<{ [key: string]: number }> => {
    return new Promise((resolved, rejected) => {
      var i = new Image();
      i.onload = function () {
        resolved({
          w: i.width,
          h: i.height,
          nw: i.naturalWidth,
          nh: i.naturalHeight,
        });
      };
      i.src = file;
    });
  };



  useEffect(()=>{
    console.log(content);
  },[content])
  useEffect(()=>{
    actions?.updateCanvasData({
      id,
      content: content,
      dimension: {
        width: '64px',
        height: '64px',
      },
    });
  },[imogeRef])

  const renderImage = () => {
    return (
      <div
        ref ={imogeRef}
        style={{
          backgroundImage: `url(${content})`,
          backgroundSize: 'contain',
          width: '100%',
          height: '100%',
          backgroundRepeat: 'no-repeat',
        }}
      />
    );
  };

  return <>{content &&  renderImage()}</>;
};

export default ImogeElement;
