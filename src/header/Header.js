import React,{useState,useEffect,useRef} from 'react';
import './Header.css';
import logo from '../assets/images/logo.jpg';
import { Button} from '@mui/material';
import SearchKeyword from './SearchKeyword.js';
import Slider from 'react-slick';
import banner1 from '../assets/images/banner1.png'
import banner2 from '../assets/images/banner2.png'
import prevArrow from '../assets/images/prevArrow.png'
import nextArrow from '../assets/images/nextArrow.png'
const Header=()=>{
  const [keywordBoxVisible, setKeywordBoxVisible] = useState(false);
  const [keywordBoxLeft, setkeyWordBoxLeft] = useState("0px");
  const [keywordBoxTop, setkeyWordBoxTop] = useState("0px");
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{ ...style, display: 'block', color: 'black', background: 'white' }}
        onClick={onClick}
      >
        <img src={prevArrow} alt="prev" style={{ width: '15px', height: '15px' }} />
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', color: 'black', background: 'white' ,zIndex:"1"}}
        onClick={onClick}
      >
        <img src={nextArrow} alt="next" style={{ width: '15px', height: '15px' }} />
      </div>
    );
  };
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
    {src:banner1},
    {src:banner2}
  ];
    const headerFont={
        fontSize:"20px",
        color:"#646464",
    }
    const moveHome=()=>{
        window.location.href=""
    }
    const settings = {
      dots: true,
      infinite: true,
      arrows: false, //TODO issues with previous arrow on carousel
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 8000
    };
    const change=()=>{
      setKeywordBoxVisible(true)
      console.log(keywordBoxVisible)
    }
    return (
      <div className="headerMain">
        <div className="inner"  >
          <img src={logo} className="logo" onClick={moveHome} />
          <span className="inner" id="inner">
            <div style={{ display: 'relative',marginLeft:"30px",paddingTop:"15px" }}
             ref={keywordBoxRef}
              onMouseOver={()=>{setKeywordBoxVisible(true)}} 
              onMouseOut={()=>{setKeywordBoxVisible(false)}}
              >
              <SearchKeyword />
            </div>
          </span>
          <Button href="/signin" style={{ marginBottom: '30px', fontSize: '20px' }} >
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
        <Slider {...settings}>
          {dummyImages.map((item, index) => (
             <img src={item.src} id={index} alt="배너" onClick={()=>{setKeywordBoxVisible(false)}}/>
          ))}
        </Slider>
        
        </div>
      </div>
    );
}

export default Header;