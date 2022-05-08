import React, { useState,useRef } from 'react';
import TextEditArea from 'pages/generate/TextEditArea';
import 'pages/generate/style.css';
import { text, image, align, emoji } from 'pages/generate/arrays';
import CanvasContainer from './CanvasContainer.tsx';
import Moveable from 'react-moveable'
import PageDisplay from './PageDisplay';
const EditPortfolio = (props) => {
  const doCommand = (cmd) => {
    const val = typeof cmd.val !== 'undefined' ? prompt('Value for ' + cmd.cmd + '?', cmd.val) : '';
    //const val = typeof cmd.val !== 'undefined' ? cmd.val : '';
    console.log(cmd.cmd);
    document.execCommand(cmd.cmd, true, val || '');
  };

  const handleBtnClick = (item) => {
    doCommand(item);
  };
  const { printRef } = props;
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <PageDisplay />
        <CanvasContainer />
        <div>
          <div className="parent">
            {/* <div className="itemBoxCss">
            <details>
              <summary>Text</summary>
              <br />
              {text.map((item) => {
                return (
                  <button className="button_box editor_buttons" onClick={() => handleBtnClick(item)}>
                    {item.label}
                  </button>
                );
              })}
            </details>
          </div> */}

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

            {/* <div className="itemBoxCss">
              <details>
                <summary>정렬</summary>
                <br />
                {align.map((item) => {
                  return (
                    <button
                      className="button_box editor_buttons"
                      onClick={() => {
                        console.log('aaa');
                        console.log(item);
                        handleBtnClick(item);
                      }}
                    >
                      {' '}
                      {item.label}{' '}
                    </button>
                  );
                })}
              </details>
            </div> */}

            <div className="itemBoxCss">
              <details>
                <summary>이모티콘</summary>
                <br />
                {emoji.map((item) => {
                  return (
                    <button className="button_none editor_buttons1" onClick={() => handleBtnClick(item)}>
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
                <div style={{alignContent:"center"}}>
                <table style={{border:"none",margin:"10px",borderSpacing:"0 1rem", borderCollapse:"separate"}}  >
                    <tbody style={{}}>
                    {
                        Array(10).fill(null).map((tr,index)=>{
                            return <tr style={{lineHeight:"1rem"}} key={index}>
                                {
                                    Array(10).fill(null).map((td,i)=>{
                                        return <td  style={{border:"1px solid black" ,marginLeft:"1px"}} key={i} >
                                         <div style={{width:"15px",height:"15px",}}></div>
                                        </td>
                                    })
                                }
                            </tr>
                        })
                    }
                    </tbody>

                </table>
                </div>
              </details>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPortfolio;
