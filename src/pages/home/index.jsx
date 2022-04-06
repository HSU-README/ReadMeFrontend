import React, { useCallback, useState, useEffect } from 'react';
import Header from '../../header/Header.js';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import DocCard from './DoCard.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import prevArrow from '../../assets/images/prevArrow.png';
import nextArrow from '../../assets/images/nextArrow.png';
import Modal from 'components/modal/index.jsx';

const Home = () => {
  const [showDetailForm, setShowDetailForm] = useState(false);
  const [detailFormId, setDetailFormId] = useState('');

  const openDetailForm = (id) => {
    setShowDetailForm(true);
    setDetailFormId(id);
  };

  const closeDetailForm = () => {
    setShowDetailForm(false);
    setDetailFormId('');
  };

  const SamplePrevArrow = (props) => {
  const [sliderCount, setSliderCount]= useState(4);//기본화면에서 4개
  useEffect(()=>{

  },window.addEventListener('resize',()=>{
    if(window.outerWidth>1320){
      setSliderCount(4)
    }else if(window.outerWidth>1000 && window.outerWidth<=1320){
      setSliderCount(3);
    }else if(window.outerWidth>660 &&window.outerWidth<=1000){
      setSliderCount(2);
    }else if(window.outerWidth<=660){
      setSliderCount(1);
    }
      console.log(window.outerWidth)
  }))
    
  const SamplePrevArrow=(props)=> {
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
        style={{ ...style, display: 'block', color: 'black', background: 'white' }}
        onClick={onClick}
      >
        <img src={nextArrow} alt="next" style={{ width: '15px', height: '15px' }} />
      </div>
    );
  };
  const dummyImages = [{ url: 'https://placeimg.com/640/480/any' }, { url: 'https://placeimg.com/640/480/any' }];
  const dummyData = [
    { img: '../../assets/images/dummyBlack.jpg', tag: ['대학교', '컴공'], name: '김한성', id: '0' },
    { img: '../../assets/images/dummyRed.jpeg', tag: ['대학교', '컴공'], name: '이한성', id: '1' },
    { img: '../../assets/images/dummyRed.jpeg', tag: ['대학교', '컴공'], name: '아무개', id: '2' },
    { img: '../../assets/images/dummyRed.jpeg', tag: ['대학교', '컴공'], name: '리액트', id: '3' },
    { img: '../../assets/images/dummyRed.jpeg', tag: ['대학교', '컴공'], name: '스프링', id: '4' },
    { img: '../../assets/images/dummyRed.jpeg', tag: ['대학교', '컴공'], name: '홍길동', id: '5' },
  ];
  const formFont = {
    fontSize: '23px',
    marginTop: '30px',
    marginBottom: '20px',
    marginLeft: '90px',
    fontWeight: 'bold',
  };
  }

  const formFont={
    fontSize:"23px",
    marginTop:"30px",
    marginBottom:"20px",
    padding:"8px",
    borderRadius:"15px",
    marginRight:"98px",
    fontWeight:"bold",
    border:"1px solid lightGray",
    boxShadow:"2px 2px 2px 2px lightGray",
    marginLeft:"90px",
  }

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

  var count=4;
  return (
    <div style={{ position: 'relative' }}>
      {showDetailForm === true ? (
        <Modal detailFormId={detailFormId} dummyData={dummyData} closeDetailForm={closeDetailForm} />
      ) : (
        <></>
      )}
      <Header />
      <SimpleImageSlider width="100%" height="300px" images={dummyImages} showBullets={true} showNavs={true} />

      <div style={formFont}>추천 양식</div>
      <Slider {...settings} style={{ marginLeft: '50px', marginRight: '50px' }}>
        {dummyData.map((data, index) => (
          <DocCard key={index} id={index} openDetailForm={openDetailForm} />
        ))}
      </Slider>

      <div style={formFont}>나의 양식</div>
      <Slider {...settings} style={{ marginLeft: '50px', marginRight: '50px' }}>
        {dummyData.map((data, index) => (
          <DocCard key={index} id={index} openDetailForm={openDetailForm} />
        ))}
      </Slider>

      <div style={formFont}>학과별 양식</div>
      <Slider {...settings} style={{ marginLeft: '50px', marginRight: '50px' }}>
        {dummyData.map((data, index) => (
          <DocCard key={index} id={index} openDetailForm={openDetailForm} />
        ))}
      </Slider>
    </div>
  );
};

export default Home;
