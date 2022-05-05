import React,{useRef, useState, useEffect} from 'react';
const Test1 = ()=>{
    const canvas= useRef(null);
    let ctx=null;
    var canvasEle =null;
    const [textt,setText] = useState("")
    const writeText = (info, style = {}) => {
        const { text, x, y } = info;
        const { fontSize = 20, fontFamily = 'Arial', color = 'black', textAlign = 'left', textBaseline = 'top' } = style;
       
        ctx.beginPath();
        ctx.font = fontSize + 'px ' + fontFamily;
        ctx.textAlign = textAlign;
        ctx.textBaseline = textBaseline;
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
        ctx.stroke();
      }
      let x=0
      let y=0
    const[canvasTag, setCanvasTag] = useState([]);
    useEffect(() => {
        // dynamically assign the width and height to canvas
        canvasEle = canvas.current;
        canvasEle.width = canvasEle.clientWidth;
        canvasEle.height = canvasEle.clientHeight;
     
        // get context of the canvas
        ctx = canvasEle.getContext("2d");
      }, []);
      useEffect(() => {
        writeText({ text: 'Clue Mediator!', x: 180, y: 70 });
     
        writeText({ text: 'Welcome to ', x: 180, y: 70 }, { textAlign: 'right' });
     
        writeText({ text: 'www.cluemediator.com', x: 180, y: 130 }, { fontSize: 30, color: 'green', textAlign: 'center' });
     
        writeText({ text: 'Like, Share and Subscribe...', x: 180, y: 200 }, { fontSize: 14, fontFamily: 'cursive', color: 'blue', textAlign: 'center' });
      }, []);
      useEffect(()=>{
        ctx.beginPath();
        ctx.fillText(`adssadadasdas`, 180,70);
        ctx.stroke();
        x+=10
        y+=10
      },[textt])
    return(
        <div className="App">
      
      <canvas ref={canvas} style={{backgroundColor:"gray"}}></canvas>
      <input type="text" value={textt} onChange={(e)=>{
          
          setText(e.target.value)
          
         
      }}></input>
    </div>
    );
}

export default Test1;