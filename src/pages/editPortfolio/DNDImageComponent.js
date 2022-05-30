import React, { useState } from 'react';
import 'pages/generate/style.css';
import { image, emoji, emoji2, Picktogram, widthLine,verticalLine } from 'pages/generate/arrays';
import TableDND from './Table/TableDND';
import { ImageList, ImageListItem } from '@mui/material';
import { CardContent } from '@mui/material';
const doCommand = (cmd) => {
  const val = typeof cmd.val !== 'undefined' ? prompt('Value for ' + cmd.cmd + '?', cmd.val) : '';

  document.execCommand(cmd.cmd, true, val || '');
};

const DNDImageComponent=(props)=>{
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
      <div style={{ marginRight: '40px',marginLeft:"16%" }}>
        <div className="parent">
          <div className="itemBoxCss">
            <details>
              <summary>이미지</summary>
              <br />
              {image.map((item,index) => {
                return (
                  <img
                    key={index}
                    src={require('../../assets/images/imageIcon.png')}
                    style={{
                      border: '1px solid lightgray',
                      borderRadius: '15px',
                      width: '100px',
                      height: '100px',
                      margin: 'auto auto',
                    }}
                    onClick={() => createCommand('IMAGE')}
                  />
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
                <ImageList sx={{ width: 280, height: 200 }} cols={3} rowHeight={140}>
                  {emoji.map((item, index) => {
                    return (
                      <ImageListItem key={item.label}>
                        <div style={{ border: '1px solid lightgray' }} key={`${item.label} ${index}`}>
                          <img
                            src={item.val}
                            key={index}
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
                <ImageList sx={{ width: 280, height: 200 }} cols={3} rowHeight={150}>
                  {emoji2.map((item, index) => {
                    return (
                      <ImageListItem key={item.label}>
                        <div style={{ border: '1px solid lightgray' }} key={`${item.label} ${index}`}>
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
                <ImageList sx={{ width: 280, height: 200 }} cols={3} rowHeight={100}>
                  {Picktogram.map((item,index) => {
                    return (
                      <ImageListItem key={item.label}>
                        <div style={{ border: '1px solid lightgray' }} key={item.label}>
                          <img
                            key={index}
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
}

export default DNDImageComponent;