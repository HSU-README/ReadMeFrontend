import React from 'react';
const EditPortfolio= (props) =>
 { 
   const { printRef } = props; 
   return (
    <div ref={printRef} style={{marginRight:"20%" ,marginLeft:"20%", textAlign:"center"}}>
      <p style={{color:"red"}}>아주 간단한 컴포넌트입니다.</p>
      <a href="http://www.naver.com">네이버의 링크태그</a>
      </div>
    
   )
};

export default EditPortfolio;
