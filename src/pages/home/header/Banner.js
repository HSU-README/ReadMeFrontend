import React, { useState } from 'react';
import Slider from 'react-slick';
import banner1 from 'assets/images/banner1.png';
import banner2 from 'assets/images/banner2.png';
import {useSelector, useDispatch} from 'react-redux';
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false, //TODO issues with previous arrow on carousel
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 8000,
  };
  const dispatch = useDispatch()
  const invisible=()=>{//추천검색어 안보이게
    dispatch({type:'invisible'})
  }
  const dummyImages = [{ src: banner1 }, { src: banner2 }];
  return (
    <Slider {...settings} >
      {dummyImages.map((item, index) => (
        <img
          src={item.src}
          id={index}
          key={index}
          alt="배너"
          onClick={() => {
            invisible()
          }}
        />
      ))}
    </Slider>
  );
};

export default Banner;
