import React, { useState } from 'react';
import 'pages/generate/style.css';
import { image, emoji } from 'pages/generate/arrays';
import CanvasContainer from './CanvasContainer.tsx';
import PageDisplay from './PageDisplay';
import TableDND from './Table/TableDND';
const EditPortfolio = () => {
  const [chartBackgroundColor, setChartBackgroundColor] = useState('1px solid black');
  const doCommand = (cmd) => {
    const val = typeof cmd.val !== 'undefined' ? prompt('Value for ' + cmd.cmd + '?', cmd.val) : '';
    //const val = typeof cmd.val !== 'undefined' ? cmd.val : '';
    console.log(cmd.cmd);
    document.execCommand(cmd.cmd, true, val || '');
  };
  const [setCreateElement] = useState('');
  const handleBtnClick = (item) => {
    doCommand(item);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <PageDisplay />
        <div>
          <div className="parent">
            <div className="itemBoxCss">
              <details>
                <summary>Image</summary>
                <br />
                {image.map((item) => {
                  return (
                    <button className="button_box editor_buttons" onClick={() => handleBtnClick(item)}>
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
                    <button
                      className="button_none editor_buttons1"
                      onClick={() => {
                        setCreateElement(`IMAGE ${item.val}`);
                        //handleBtnClick(item)
                      }}
                    >
                      <img src={item.val} />
                    </button>
                  );
                })}
              </details>
            </div>

            <div className="itemBoxCss">
              <details>
                <summary>도형</summary>
                <br />
              </details>
            </div>

            <div className="itemBoxCss">
              <details>
                <summary>표</summary>
                <br />

                <TableDND setCreateElement={setCreateElement} />
              </details>
            </div>
          </div>
        </div>
        <CanvasContainer />
      </div>
    </div>
  );
};

export default EditPortfolio;
