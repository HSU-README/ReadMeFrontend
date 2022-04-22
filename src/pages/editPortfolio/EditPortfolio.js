import React, { useState } from 'react';
import TextEditArea from 'pages/generate/TextEditArea';
import 'pages/generate/style.css';
import { text, image, align, emoji } from 'pages/generate/arrays';

const EditPortfolio = (props) => {
  const doCommand = (cmd) => {
    const val = typeof cmd.val !== 'undefined' ? prompt('Value for ' + cmd.cmd + '?', cmd.val) : '';
    document.execCommand(cmd.cmd, false, val || '');
  };

  const handleBtnClick = (item) => {
    doCommand(item);
  };

  const { printRef } = props;
  return (
    <>
      <div className="parent">
        <div className="itemBoxCss">
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

        <div className="itemBoxCss">
          <details>
            <summary>Image</summary>
            <br />
            {image.map((item) => {
              return (
                <button className="editor_buttons" onClick={() => handleBtnClick(item)}>
                  {' '}
                  {item.label}{' '}
                </button>
              );
            })}
          </details>
        </div>

        <div className="itemBoxCss">
          <details>
            <summary>정렬</summary>
            <br />
            {align.map((item) => {
              return (
                <button className="editor_buttons" onClick={() => handleBtnClick(item)}>
                  {' '}
                  {item.label}{' '}
                </button>
              );
            })}
          </details>
        </div>

        <div className="itemBoxCss">
          <details>
            <summary>이모티콘</summary>
            <br />
            {emoji.map((item) => {
              return (
                <button className="editor_buttons" onClick={() => handleBtnClick(item)}>
                  {' '}
                  {item.label}{' '}
                </button>
              );
            })}
          </details>
        </div>
      </div>

      <div ref={printRef}>
        <TextEditArea />
      </div>
    </>
  );
};

export default EditPortfolio;
