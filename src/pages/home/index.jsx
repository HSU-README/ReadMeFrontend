import React, { useCallback, useState, useEffect,useRef } from 'react';
import Header from './header/Header.js';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import './index.css';
import DocCard from './DoCard.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import prevArrow from '../../assets/images/prevArrow.png';
import nextArrow from '../../assets/images/nextArrow.png';
import {useSelector, useDispatch} from 'react-redux';
import Modal from 'components/modal/index.jsx';
import Footer from 'components/footer/index.jsx'
import Banner from './header/Banner.js'
const Home = (props) => {
  const [showDetailForm, setShowDetailForm] = useState(false);
  const [detailFormId, setDetailFormId] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [alertMessageVisible, setAlertMessageVisible] =useState(false)
  const { loginCheck } = useSelector(state => state.loginCheck)
  const {isntClick} = useRef(null);
  const {visibleCheck} = useSelector(state=>state.visibleCheck) //추천검색어 창 나타나게하는 리덕스 전역 관리 변수
  const dispatch = useDispatch()
  const openDetailForm = (id) => {
    setShowDetailForm(true);
    setDetailFormId(id);
  };
  const chagneGrayBackground = useRef(null)//로그인이 되어있지 않을 시에 클릭하면 회색화면 나오게하는 변수
  const invisible=()=>{//추천검색어 안보이게
    dispatch({type:'invisible'})
  }

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
      <img className={className}  src={prevArrow} alt="next" style={{...style, width: '15px', height: '15px' }} onClick={onClick}/>

    );
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <img className={className}  src={nextArrow} alt="next" style={{...style, width: '15px', height: '15px' }} onClick={onClick}/>

    );
  };

  const RecommendPortFolio=({opacity,isLogin})=>{
    return (
      <span >
        <div className="sectionFont">
          <span style={{ opacity: `${opacity}` }}>나의 포트폴리오</span>
        </div>
        <Slider {...settings} style={{ marginLeft:"100px", marginRight: '50px', opacity: `${opacity}` }}>
          {dummyData.map((data, index) => (
            <DocCard key={index} id={index} openDetailForm={openDetailForm} pofolInfo={data} isLogin={isLogin} />
          ))}
        </Slider>

        <div className="sectionFont">
          <span style={{ opacity: `${opacity}` }}>인기 포트폴리오</span>
        </div>
        <Slider {...settings} style={{ marginLeft:"100px", marginRight: '50px', opacity: `${opacity}` }}>
          {dummyData.map((data, index) => (
            <span key={index} id={index}>
              <DocCard openDetailForm={openDetailForm} pofolInfo={data} />
            </span>
          ))}
        </Slider>
      </span>
    );
  };

  

  const dummyData = [
    { img: '../../assets/images/dummyBlack.jpg', tag: ['대학교', '컴공', ], name: '김한성', id: '0' },
    { img: '../../assets/images/dummyRed.jpeg', tag: ['대학교', '컴공', '프론트'], name: '이한성', id: '1' },
    { img: '../../assets/images/dummyRed.jpeg', tag: ['대학교', '컴공', '프론트'], name: '아무개', id: '2' },
    { img: '../../assets/images/dummyRed.jpeg', tag: ['대학교', '컴공', '프론트'], name: '리액트', id: '3' },
    { img: '../../assets/images/dummyRed.jpeg', tag: ['대학교', '컴공', '프론트'], name: '스프링', id: '4' },
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
  return (
    <div style={{position:'relative'}} >
      {showDetailForm === true ? (
        <Modal detailFormId={detailFormId} dummyData={dummyData} closeDetailForm={closeDetailForm} />
      ) : (
        <></>
      )}
      <Header />
      <div >
        <Banner/>
      </div>
      <div onClick={()=>{invisible()}}>
        </div>

      <div className="sectionFont">인기 포트폴리오</div>
        <Slider {...settings} style={{marginLeft:"100px", marginRight:"50px"}}>
          {dummyData.map((data, index) => (
              <DocCard key={index} id={index} openDetailForm={openDetailForm} pofolInfo={data} isLogin="true" />
          ))}
        </Slider>
      {loginCheck ? (
        <RecommendPortFolio opacity="1"  isLogin="true"/>
      ) : (
        //로그인이 되어있지 않고 나의 포트폴리오나 전공병 포트폴리오 글을 클릭 시 회색화면으로 변경
        <div ref={chagneGrayBackground} onClick={()=>{
            invisible()
            setAlertMessageVisible(true)
            chagneGrayBackground.current.style.background='rgba(128, 128, 128, 0.5)'
          }}>
          
          {!alertMessageVisible ?
          <RecommendPortFolio opacity="1" isLogin="false" onClick={()=>{invisible()}}/>:

            <>
            <RecommendPortFolio opacity="0.5" isLogin="false" onClick={()=>{invisible()}}/>
            <span className="beforeLoginAlertText">로그인 후 이용 가능합니다.</span>
          </> }
          
        </div>
      )} 
      <br/>
      <Footer/>
    </div>
  );
};

export default Home;
