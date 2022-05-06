import React, { useState } from 'react';
import './style.css';
import { text, image, align } from './arrays';
import TextEditArea from './TextEditArea';


const Generate = () => {
  /*
  const doCommand = (cmd) => {
    const val =  typeof cmd.val !== 'undefined'
    ? prompt('Value for ' + cmd.cmd + '?', cmd.val)
    : ''
    document.execCommand(cmd.cmd, false, val || '');
  };

  const handleBtnClick = (item) => {
    doCommand(item);
  };

  return (
    <>
      <div>
        <div className="parent">
          <div className="first">
            <details>
              <summary>Text</summary>
              <br />
              {text.map((item) => {
                return (
                  <button className="editor_buttons" onClick={() => handleBtnClick(item)}>
                    {item.label}
                  </button>
                );
              })}
            </details>
          </div>

          <div className="second">
            <details>
              <summary>Image</summary>
              <br />
              {image.map((item) => {
                return (
                  <button className="editor_buttons1" onClick={() => handleBtnClick(item)}>
                    {' '}
                    {item.label}{' '}
                  </button>
                );
              })}
            </details>
          </div>

          <div className="third">
            <details>
              <summary>정렬</summary>
              <br />
              {align.map((item) => {
                return (
                  <button className="editor_buttons1" onClick={() => handleBtnClick(item)}>
                    {' '}
                    {item.label}{' '}
                  </button>
                );
              })}
            </details>
          </div>
        </div>
      </div>
      <TextEditArea /> 
    </>
  );
*/
};
export default Generate;
