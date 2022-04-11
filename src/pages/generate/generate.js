import React, { useState } from 'react';
import './style.css';
import { text, image, align } from './arrays';
import TextEditArea from './TextEditArea';

const Generate = () => {
  const doCommand = (cmd) => {
    const val = typeof cmd.val !== '' ? prompt('Value for ' + cmd.cmd + '?', cmd.val) : '';
    document.execCommand(cmd.cmd, false, val || '');
  };

  const handleBtnClick = (item) => {
    doCommand(item);
  };

  return (
    <>
      <div class="container">
        <div class="parent">
          <div className="first">
            <details>
              <summary>Text</summary>
              {text.map((item) => {
                return <button onClick={() => handleBtnClick(item)}> {item.label} </button>;
              })}
            </details>
          </div>

          <div className="second">
            <details>
              <summary>Image</summary>
              {image.map((item) => {
                return <button onClick={() => handleBtnClick(item)}> {item.label} </button>;
              })}
            </details>
          </div>

          <div className="third">
            <details>
              <summary>정렬</summary>
              {align.map((item) => {
                return <button onClick={() => handleBtnClick(item)}> {item.label} </button>;
              })}
            </details>
          </div>
        </div>
      </div>
      <TextEditArea />
    </>
  );
};

export default Generate;
