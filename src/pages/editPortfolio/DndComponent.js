import React, { useState } from 'react';
import 'pages/generate/style.css';
import { image, emoji, emoji2, Picktogram, widthLine, verticalLine } from 'pages/generate/arrays';
import TableDND from './Table/TableDND';
import { ImageList, ImageListItem } from '@mui/material';
import { CardContent } from '@mui/material';
const doCommand = (cmd) => {
  const val = typeof cmd.val !== 'undefined' ? prompt('Value for ' + cmd.cmd + '?', cmd.val) : '';

  document.execCommand(cmd.cmd, true, val || '');
};

const DndComponent = (props) => {
  const [chartBackgroundColor, setChartBackgroundColor] = useState('1px solid black');
  const handleBtnClick = (item) => {
    doCommand(item);
  };

  const createCommand = (command) => {
    new Promise((resolve, rejects) => {
      props.setCreateElement('');
      resolve(command);
    }).then((command) => {
      props.setCreateElement(command);
    });
  };
  return (
    <div style={{ marginLeft: '40px' }}>
      <div className="parent">
        <div className="itemBoxCss">
          <details>
            <summary>텍스트 상자</summary>
            <br />
            <img
              src={require('../../assets/images/textboxIcon.png')}
              style={{
                //   border: '1px solid black',
                //   borderRadius: '15px',
                width: '100px',
                height: '100px',
                //   margin: 'auto auto',
              }}
              onClick={() => {
                createCommand('TEXT');
              }}
            />
            <br /> <br />
          </details>
        </div>
        <div className="itemBoxCss">
          <details>
            <summary>구분선</summary>
            <details>
              <summary className="menu1">가로 구분선</summary>
              <br />
              <ImageList sx={{ width: 280, height: 50, overflow: 'hidden' }} cols={2}>
                {widthLine.map((item, index) => {
                  return (
                    <ImageListItem key={item.label}>
                      <div>
                        <img
                          src={item.val}
                          onClick={() => {
                            createCommand(`IMOGE ${item.val}`);
                          }}
                        />
                      </div>
                    </ImageListItem>
                  );
                })}
              </ImageList>
            </details>
            <details>
              <summary className="menu2">세로 구분선</summary>
              <br />
              <ImageList sx={{ width: 280, height: 100, overflow: 'hidden' }} cols={2} rowHeight={50}>
                {verticalLine.map((item, index) => {
                  return (
                    <ImageListItem key={item.label}>
                      <div>
                        <img
                          src={item.val}
                          style={{ objectFit: 'fill', height: '110px' }}
                          onClick={() => {
                            createCommand(`IMOGE ${item.val}`);
                          }}
                        />
                      </div>
                    </ImageListItem>
                  );
                })}
              </ImageList>
            </details>
          </details>
        </div>
        <div className="itemBoxCss">
          <details>
            <summary>표</summary>
            <br />
            <div style={{ border: '1px solid black', alignContent: 'center' }}>
              <TableDND setCreateElement={props.setCreateElement} />
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default DndComponent;
