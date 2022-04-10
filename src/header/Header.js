import React,{useState,useEffect,useRef} from 'react';
import './Header.css';
import logo from '../assets/images/logo.jpg';
import { Button} from '@mui/material';
import SimpleImageSlider from 'react-simple-image-slider';
import SearchKeyword from './SearchKeyword.js';
const Header=()=>{
  const [keywordBoxVisible, setKeywordBoxVisible] = useState(false);
  const [keywordBoxLeft, setkeyWordBoxLeft] = useState("0px");
  const [keywordBoxTop, setkeyWordBoxTop] = useState("0px");
  const keywordBox={
        position:"absolute",
        border:"2px solid lightGray",
        backgroundColor:"white",
        borderRadius:"15px",
        width:"700px",
        zIndex:"1",
        marginTop:"14px",
        boxShadow:"2px 2px lightGray",
        textAlign:"left", 
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
  const change=()=>{
    console.log(keywordBoxVisible);
    setKeywordBoxVisible(true);
  }
  useEffect(()=>{
    
  },window.addEventListener('resize',()=>{
    setkeyWordBoxLeft(`${keywordBoxRef.current.getBoundingClientRect().x}px`)
    setkeyWordBoxTop(`${keywordBoxRef.current.getBoundingClientRect().y+42}px`)
  }))
  useEffect(()=>{
    setkeyWordBoxLeft(`${keywordBoxRef.current.getBoundingClientRect().x}px`)
    setkeyWordBoxTop(`${keywordBoxRef.current.getBoundingClientRect().y+42}px`)
  },[])
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
          <span className="inner" id="inner">
            <div style={{ display: 'relative' }} ref={keywordBoxRef} onClick={change}>
              <SearchKeyword />
            </div>
          </span>
          <Button href="/signin" style={{ marginBottom: '30px', fontSize: '20px' }}>
            로그인
          </Button>
          <Button href="/signup" style={{ marginBottom: '30px', fontSize: '20px' }}>
            회원가입
          </Button>
        </div>
        {keywordBoxVisible && (
          <div style={keywordBox}>
            <div style={{ textAlign: 'left', border: '1px solit gray', marginLeft: '10px', marginTop: '10px',textAlign:'left',paddingLeft:"25px" }}>
              추천 키워드
            </div>

            <hr style={{ backgroundColor:"black"}}/>
            <div style={{ display: 'inlineBlock' }}>
              <Button style=
              {keywordTag}
              onClick={()=>{alert('click!')}}
              >공대
              </Button>

              <Button style=
              {keywordTag}
              >디자인
              </Button>
              <Button style=
              {keywordTag}
              >디자인
              </Button>
              <Button style=
              {keywordTag}
              >디자인
              </Button>
              <Button style=
              {keywordTag}
              >디자인
              </Button>
              <Button style=
              {keywordTag}
              >디자인
              </Button>
              <Button style=
              {keywordTag}
              >디자인
              </Button>
              <Button style=
              {keywordTag}
              >디자인
              </Button>
            </div>
          </div>
        )}

        <div style={{ zIndex: '0', position: 'relative' }}>
          <SimpleImageSlider
            width="100%"
            height="300px"
            images={dummyImages}
            showBullets={true}
            showNavs={true}
            onClick={() => setKeywordBoxVisible(false)}
          />
        </div>
      </div>
    );
}

export default Header;