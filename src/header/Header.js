import React,{useState,useEffect,useRef} from 'react';
import './Header.css';
import logo from '../assets/images/logo.jpg';
import { useLocation } from 'react-router-dom';
import { Button} from '@mui/material';
import Searchbar from './Searchbar.js'
import Banner from './Banner.js'
import Footer from '../components/footer/index.jsx'
const Header=()=>{
  const [keywordBoxLeft, setkeyWordBoxLeft] = useState("0px");
  const [keywordBoxTop, setkeyWordBoxTop] = useState("0px");
  const [keywordBoxVisible, setKeywordBoxVisible] = useState(false);
  const keywordBoxLeftRight={
    left:keywordBoxLeft,
    top:keywordBoxTop
  }
  const keywordTag = {
    backgroundColor: 'lightGray',
    width: '100px',
    marginLeft: '35px',
    marginRight: '35px',
    color: 'black',
    marginTop: '13px',
    marginBottom:'13px',
    boxShadow:'1px 1px gray'
  };
  var keywordBoxRef=useRef(null);
  useEffect(()=>{
    
  },window.addEventListener('resize',()=>{
    setkeyWordBoxLeft(`${keywordBoxRef.current.getBoundingClientRect().x}px`)
    setkeyWordBoxTop(`${keywordBoxRef.current.getBoundingClientRect().y+42}px`)
  }))
  useEffect(()=>{
    setkeyWordBoxLeft(`${keywordBoxRef.current.getBoundingClientRect().x}px`)
    setkeyWordBoxTop(`${keywordBoxRef.current.getBoundingClientRect().y+42}px`)
  },[])
  const dummeyKeywords=[
    "컴공","디자인","컴공","디자인","컴공","디자인","컴공","디자인"
  ]
    return (
      <div className="headerMain">
        <div className="inner" style={{marginBottom:"40px"}} >
          <img src={logo} className="logo" onClick={()=>{window.location.href=""}} />
          <span className="inner" id="inner">
            <div style={{ display: 'relative',marginLeft:"30px",paddingTop:"10px"}}
             ref={keywordBoxRef}
              onMouseOver={()=>{setKeywordBoxVisible(true)}} 
              >
              <Searchbar />
            </div>
          </span>
            <span>
              <Button href="/login" style={{marginTop:"43px",fontSize: '23px' }} >
                로그인
              </Button>
              <Button href="/signup" style={{ marginTop:"43px",fontSize: '23px' }}>
                회원가입
              </Button>
            </span>
          
        </div>
        {keywordBoxVisible && (
          <div className="keywordBox" style={keywordBoxLeftRight}>
            <div style={{ textAlign: 'left', border: '1px solit gray', marginLeft: '10px', marginTop: '10px',textAlign:'left',paddingLeft:"25px" }}>
              추천 키워드
            </div>
            <hr style={{ backgroundColor:"black"}}/>
            <div style={{ display: 'inlineBlock' }}>
              {
                dummeyKeywords.map((data,index)=>{
                  return(
                  <Button key={index} style={keywordTag}>
                    {data}
                  </Button>
                  )
                })
              }
            </div>
          </div>
        )}
        <div style={{ position: 'relative' }}>
          <Banner setKeywordBoxVisible={setKeywordBoxVisible}/>
        </div>
        
      </div>
    );
}

export default Header;