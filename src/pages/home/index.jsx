import React, { useCallback, useState,useEffect } from 'react';
import Header from '../../header/Header.js';
import 'react-toastify/dist/ReactToastify.css';
import SimpleImageSlider from 'react-simple-image-slider';
import './index.css';
import DocCard from './DoCard.js';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prevArrow from '../../assets/images/prevArrow.png';
import nextArrow from '../../assets/images/nextArrow.png';
const Home = () => {
  const SamplePrevArrow=(props)=> {
    const { className, style, onClick } = props;
    
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color:"black",background:"white" }}
        onClick={onClick}
      >
      <img src={prevArrow} alt="prev" style={{width:"15px",height:"15px"}}/>
      </div>
    );
  }
  const SampleNextArrow=(props)=> {
    const { className, style, onClick } = props;
    return (
      <div
      className={className}
      style={{ ...style, display: "block", color:"black",background:"white" }}
      onClick={onClick}
    >
   <img src={nextArrow} alt="next" style={{width:"15px",height:"15px"}}/>
    </div>
    );
  }
  const dummyImages=[
    {url:"https://placeimg.com/640/480/any"},
    {url:"https://placeimg.com/640/480/any"}
  ];
  const dummyData=[
    {img:'../../assets/images/dummyBlack.jpg',tag:["대학교", "컴공"]},
    {img:'../../assets/images/dummyRed.jpeg',tag:["대학교", "컴공"]},
    {img:'../../assets/images/dummyRed.jpeg',tag:["대학교", "컴공"]},
    {img:'../../assets/images/dummyRed.jpeg',tag:["대학교", "컴공"]},
    {img:'../../assets/images/dummyRed.jpeg',tag:["대학교", "컴공"]},
    {img:'../../assets/images/dummyRed.jpeg',tag:["대학교", "컴공"]},
  ]
  const formFont={
    fontSize:"23px",
    marginTop:"30px",
    marginBottom:"20px",
    marginLeft:"90px",
    fontWeight:"bold",  
  }
  const settings = {
    arrows:true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div  >
      <Header />
      <SimpleImageSlider width="100%" height="300px" images={dummyImages} showBullets={true} showNavs={true} />
      <div style={formFont}>인기 디자인</div>
      <Slider {...settings} style={{marginLeft:"50px", marginRight:"50px"}}>
        {dummyData.map((data,index) => (
          <DocCard id={index}/>
        ))}
      </Slider>

      <div style={formFont}>마이 디자인</div>
      <Slider {...settings} style={{marginLeft:"50px", marginRight:"50px"}}>
        {dummyData.map((data,index) => (
          <DocCard id={index}/>
        ))}
      </Slider>

      <div style={formFont}>전공별 디자인</div>
      <Slider {...settings} style={{marginLeft:"50px", marginRight:"50px"}}>
        {dummyData.map((data,index) => (
          <DocCard id={index}/>
        ))}
      </Slider>
    </div>
  );
};

export default Home;

