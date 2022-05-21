import React, { useCallback, useState, useEffect, useRef } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'components/modal/index.jsx';
import Footer from 'components/footer/index.jsx';
import Banner from './header/Banner.js';
const Home = (props) => {
  const [showDetailForm, setShowDetailForm] = useState(false);
  const [detailFormId, setDetailFormId] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [alertMessageVisible, setAlertMessageVisible] = useState(false);
  const { loginCheck } = useSelector((state) => state.loginCheck);
  const { isntClick } = useRef(null);
  const dispatch = useDispatch();
  const openDetailForm = (id) => {
    setShowDetailForm(true);
    setDetailFormId(id);
  };

  const closeDetailForm = () => {
    setShowDetailForm(false);
    setDetailFormId('');
  };

  const goToSelect = () => {
    window.location.href = '/select';
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
      <img
        className={className}
        src={prevArrow}
        alt="next"
        style={{ ...style, width: '15px', height: '15px' }}
        onClick={onClick}
      />
    );
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        src={nextArrow}
        alt="next"
        style={{ ...style, width: '15px', height: '15px' }}
        onClick={onClick}
      />
    );
  };

  const RecommendPortFolio = ({isLogin }) => {
    return (
      <span>
        <div className="sectionFont">
          <span>나의 포트폴리오</span>
        </div>
        <Slider {...settings} style={{ marginLeft: '9%', marginRight: '9%' }}>
          {dummyData.map((data, index) => (
            <DocCard key={index} id={index} openDetailForm={openDetailForm} pofolInfo={data} isLogin={isLogin} />
          ))}
        </Slider>

        <div className="sectionFont">
          <span>학과별 포트폴리오</span>
        </div>
        <Slider {...settings} style={{ marginLeft: '9%', marginRight: '9%' }}>
          {dummyData.map((data, index) => (
            <span key={index} id={index}>
              <DocCard key={index} id={index} openDetailForm={openDetailForm} pofolInfo={data}  isLogin={isLogin}/>
            </span>
          ))}
        </Slider>
      </span>
    );
  };

  const dummyData = [
    { img: '../../assets/images/dummyBlack.jpg', tag: ['대학교', '컴공'], name: '김한성', id: '0' },
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
    <div style={{ position: 'relative' }}>
      {showDetailForm === true ? (
        <Modal detailFormId={detailFormId} dummyData={dummyData} closeDetailForm={closeDetailForm} />
      ) : (
        <></>
      )}
      <Header />
      <div>
        <Banner />
      </div>
      <div></div>

      {loginCheck && (
        <>
          <br />
          <div className="pofolBtnHeader">
            <button
              className="pofolBtn"
              onClick={() => {
                goToSelect();
              }}
            >
              포트폴리오 만들기
            </button>
          </div>
        </>
      )}

      <div className="sectionFont">인기 포트폴리오</div>
      <Slider {...settings} style={{ marginLeft: '9%', marginRight: '9%' }}>
        {dummyData.map((data, index) => (
          <DocCard key={index} id={index} openDetailForm={openDetailForm} pofolInfo={data} isLogin="true" />
        ))}
      </Slider>
      {loginCheck ? (
        <RecommendPortFolio isLogin="true" />
      ) : (
        //로그인이 되어있지 않고 나의 포트폴리오나 전공병 포트폴리오 글을 클릭 시 회색화면으로 변경
        <div
          onClick={() => {
            setAlertMessageVisible(true);
          }}
        >
          <RecommendPortFolio  isLogin="false" />
        </div>
      )}
      <br />
      <br/>
      <Footer />
    </div>
  );
};

export default Home;
