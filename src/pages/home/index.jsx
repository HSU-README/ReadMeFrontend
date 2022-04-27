import React, { useCallback, useState, useEffect } from 'react';
import Header from '../../header/Header.js';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import './index.css';
import DocCard from './DoCard.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import prevArrow from '../../assets/images/prevArrow.png';
import nextArrow from '../../assets/images/nextArrow.png';
import Modal from 'components/modal/index.jsx';
import Footer from 'components/footer/index.jsx'
import { useSelector, useDispatch } from 'react-redux';
const Home = ({loginCheck}) => {
  const [showDetailForm, setShowDetailForm] = useState(false);
  const [detailFormId, setDetailFormId] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const dispatch = useDispatch();
  const {loginChecking} = useSelector(state=>state.loginCheck)
  const openDetailForm = (id) => {
    setShowDetailForm(true);
    setDetailFormId(id);
  };

  useEffect(()=>{
    if(loginCheck!==undefined){
      if(loginCheck===true){
        dispatch({type:'signIn'})
        return
      }
    }
    console.log('come here')
    return dispatch({type:'signIn'})
  },[])
  useEffect(()=>{
    console.log(loginChecking)
  },loginChecking)

  
  const closeDetailForm = () => {
    setShowDetailForm(false);
    setDetailFormId('');
  };

  const [sliderCount, setSliderCount] = useState(4); //기본화면에서 4개
  useEffect(
    () => {},
    window.addEventListener('resize', () => {
      if (window.outerWidth > 1320) {
        setSliderCount(4);
      } else if (window.outerWidth > 1000 && window.outerWidth <= 1320) {
        setSliderCount(3);
      } else if (window.outerWidth > 660 && window.outerWidth <= 1000) {
        setSliderCount(2);
      } else if (window.outerWidth <= 660) {
        setSliderCount(1);
      }
    }),
  );

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


  const RecommendPortFolio=({opacity,loginSuccess})=>{
    return (
      <span>
        <div className="sectionFont"><span style={{opacity:`${opacity}`}}>나의 포트폴리오</span></div>
        <Slider {...settings} style={{ marginLeft: '50px', marginRight: '50px',opacity:`${opacity}` }}>
          {dummyData.map((data, index) => (
            <DocCard key={index} id={index} openDetailForm={openDetailForm} pofolInfo={data} />
          ))}
        </Slider>

        <div className="sectionFont"><span style={{opacity:`${opacity}`}}>전공별 포트폴리오</span></div>
        <Slider {...settings} style={{ marginLeft: '50px', marginRight: '50px',opacity:`${opacity}` }}>
          {dummyData.map((data, index) => (
            <DocCard key={index} id={index} openDetailForm={openDetailForm} pofolInfo={data} />
          ))}
        </Slider>
      </span>
    );
  }

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', color: 'black', background: 'white' }}
        onClick={onClick}
      >
        <img src={nextArrow} alt="next" style={{ width: '15px', height: '15px' }} />
      </div>
    );
  };

  const dummyData = [
    { img: '../../assets/images/dummyBlack.jpg', tag: ['대학교', '컴공','프론트','JS'], name: '김한성', id: '0' },
    { img: '../../assets/images/dummyRed.jpeg', tag: ['대학교', '컴공','프론트','JS'], name: '이한성', id: '1' },
    { img: '../../assets/images/dummyRed.jpeg', tag: ['대학교', '컴공','프론트','JS'], name: '아무개', id: '2' },
    { img: '../../assets/images/dummyRed.jpeg', tag: ['대학교', '컴공','프론트','JS'], name: '리액트', id: '3' },
    { img: '../../assets/images/dummyRed.jpeg', tag: ['대학교', '컴공','프론트','JS'], name: '스프링', id: '4' },
    { img: '../../assets/images/dummyRed.jpeg', tag: ['대학교', '컴공'], name: '홍길동', id: '5' },
  ];
  
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: sliderCount,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  var count = 4;
  return (
    <div style={{ position: 'relative' }}>
      {showDetailForm === true ? (
        <Modal detailFormId={detailFormId} dummyData={dummyData} closeDetailForm={closeDetailForm} />
      ) : (
        <></>
      )}
      <Header />
    
      <div className="sectionFont">인기 포트폴리오</div>
      <Slider {...settings} style={{ marginLeft: '50px', marginRight: '50px'}}>
        {dummyData.map((data, index) => (
          <DocCard key={index} id={index} openDetailForm={openDetailForm} pofolInfo={data} />
        ))}
      </Slider>
      
      {loginSuccess ? (
        <RecommendPortFolio opacity="1" loginSuccess={loginSuccess}/>
      ) : (
        <div className="beforeLogin">
          <RecommendPortFolio opacity="0.5" loginSuccess={loginSuccess}/>
          <span className="beforeLoginAlertText">로그인 후 이용 가능합니다.</span>
        </div>
      )}
      <br/>
      <Footer/>
    </div>
  );
};

export default Home;
