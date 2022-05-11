import React, { useCallback, useState } from 'react';
import { Container } from 'pages/myPage/myPortfolio/styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import prevArrow from 'assets/images/prevArrow.png';
import nextArrow from 'assets/images/nextArrow.png';
import SelectCard from 'components/selectCard';
import myPortFolioPreview from 'localData/myPortFolioPreview.json';

const MyPortfolio = (props) => {
  const [selectedFormat2, setSelectedFormat2] = useState('');
  const [sliderCount, setSliderCount] = useState(3); //기본화면에서 4개
  const [showDetailForm, setShowDetailForm] = useState(false);
  const [detailFormId, setDetailFormId] = useState('');

  const setSelectedFormat = (selectedFormat) => {
    props.setSelectedFormat(selectedFormat);
  };

  const getDetailFormId2 = (format) => {
    props.setDetailFormId(format);
  };

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

  const datas = myPortFolioPreview.data;

  return (
    <>
      <Container>
        <div style={{ width: '1000px', margin: '100px 0px 100px 0px' }}>
          <Slider {...settings} style={{ marginLeft: '200px', marginRight: '50px' }}>
            {datas.map((data, index) => (
              <SelectCard id={index} key={index} format={data.result} setSelectedFormat={setSelectedFormat} />
            ))}
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default MyPortfolio;
