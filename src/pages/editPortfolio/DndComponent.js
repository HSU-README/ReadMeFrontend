import React, { useState } from 'react';
import 'pages/generate/style.css';
import { image, emoji, emoji2, Shape, Picktogram } from 'pages/generate/arrays';
import TableDND from './Table/TableDND';
import { ImageList, ImageListItem } from '@mui/material';
import { CardContent } from '@mui/material';
const doCommand = (cmd) => {
  const val = typeof cmd.val !== 'undefined' ? prompt('Value for ' + cmd.cmd + '?', cmd.val) : '';
  //const val = typeof cmd.val !== 'undefined' ? cmd.val : '';
  //console.log(cmd.cmd);
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
      console.log('come');
      props.setCreateElement(command);
    });
  };
  return (
    <div style={{ marginLeft: '40px' }}>
      <div className="parent">
        <div className="itemBoxCss">
          <details>
            <summary>텍스트</summary>
            <br />
            <div
              style={{ margin: 'auto auto', border: '2px solid black', width: '200px', height: '50px' }}
              onClick={() => {
                createCommand('TEXT');
              }}
            >
              Input some text
            </div>
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

        <div className="itemBoxCss">
          <details>
            <summary>사진</summary>
            <br />
            {image.map((item) => {
              return (
                <div
                  style={{ border: '1px solid black', width: '100px', height: '100px', margin: 'auto auto' }} key={item}
                  onClick={() => createCommand('IMAGE')}
                >
                  <span style={{ margin: 'auto auto' }}>Insert Image</span>
                </div>
              );
            })}
          </details>
        </div>

        <div className="itemBoxCss">
          <details>
            <summary>이모티콘</summary>
            <br />
            <details>
              <summary className="menu1">상상부기</summary>
              <ImageList sx={{ width: 280, height: 200 }} cols={3} rowHeight={164}>
                {emoji.map((item,index) => {
                  return (
                    <ImageListItem key={item.label}>
                      <div style={{ border: '1px solid black' }} key={`${item.label} ${index}`}>
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
            <br />
            <details>
              <summary className="menu2">상상부기 프렌즈</summary>
              <ImageList sx={{ width: 280, height: 200 }} cols={3} rowHeight={164}>
                {emoji2.map((item,index) => {
                  return (
                    <ImageListItem key={item.label}>
                      <div style={{ border: '1px solid black' }} key={`${item.label} ${index}`}>
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

            <br />
            <details>
              <summary className="menu3">픽토그램</summary>
              <ImageList sx={{ width: 280, height: 200 }} cols={3} rowHeight={164}>
                {Picktogram.map((item) => {
                  return (
                    <ImageListItem key={item.label}>
                      <div style={{ border: '1px solid black' }}key={item.label}>
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
          </details>
        </div>
      </div>
    </div>
  );
};

export default DndComponent;
