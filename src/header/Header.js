import React,{useState,useEffect} from 'react';
import './Header.css';
import logo from '../assets/images/logo.jpg';
import {InputAdornment,Stack, Button} from '@mui/material';
import {TextField} from '@material-ui/core'
import Search from '@mui/icons-material/Search';
import { borderRadius } from '@mui/system';
import SimpleImageSlider from 'react-simple-image-slider';
import SearchKeyword from './SearchKeyword.js';
const Header=()=>{
  const [keywordBoxVisible, setKeywordBoxVisible] = useState(false);
  const keywordBox={
        position:"absolute",
        border:"2px solid gray",
        backgroundColor:"white",
        borderRadius:"15px",
        width:"700px",
        height:"150px",
        zIndex:"1", 
        left:"37%",
        top:"15%"
    }

  const change=()=>{
    console.log(keywordBoxVisible)
    setKeywordBoxVisible(true)
  }
  useEffect(()=>[
    console.log(keywordBoxVisible)
  ],keywordBoxVisible)
  const dummyImages=[
    {url:"https://placeimg.com/640/480/any"},
    {url:"https://placeimg.com/640/480/any"}
  ];
    const headerFont={
        fontSize:"20px",
        color:"#646464",
    }
    const moveHome=()=>{
        window.location.href=""
    }
    return (
      <div className="headerMain">
        <div className="inner">
          <img src={logo} className="logo" onClick={moveHome} />
          <span className="inner">
            <div style={{ display: 'relative' }} onClick={change}>
              <SearchKeyword />
            </div>
          </span>
          <Button href="/login" style={{ marginBottom: '30px', fontSize: '20px' }}>
            로그인
          </Button>
          <Button href="/signup" style={{ marginBottom: '30px', fontSize: '20px' }}>
            회원가입
          </Button>
        </div>
        {keywordBoxVisible&& 
          <div style={keywordBox}>
            <div style={{ textAlign: 'left', border: '1px solit gray', marginLeft: '10px', marginTop: '8px' }}>
              추천 키워드
            </div>
            <hr />
          </div>
        }

        <div style={{ zIndex: '0', position: 'relative' }}>
          <SimpleImageSlider width="100%" height="300px" images={dummyImages} showBullets={true} showNavs={true}  onClick={()=>setKeywordBoxVisible(false)} />
        </div>
      </div>
    );
}

export default Header;