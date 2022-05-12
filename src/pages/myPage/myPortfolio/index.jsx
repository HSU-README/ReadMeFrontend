import React, { useCallback, useEffect, useState } from 'react';
import { Container } from 'pages/myPage/myPortfolio/styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import prevArrow from 'assets/images/prevArrow.png';
import nextArrow from 'assets/images/nextArrow.png';
import SelectCard from 'components/selectCard';
import { getUserPortfolio } from 'apis/portfolioApi';

const MyPortfolio = (props) => {
  const [sliderCount, setSliderCount] = useState(3); //기본화면에서 3개
  const [userPortfolio, setUserPortfolio] = useState([]);
  const userId = JSON.parse(localStorage.getItem('readme_userInfo')).id;

  useEffect(() => {
    async function fetchUserPortfolioData() {
      const datas = await getUserPortfolio(userId);
      await console.log('data:' + JSON.stringify(datas));
      await setUserPortfolio(JSON.stringify(datas));
    }
    fetchUserPortfolioData();
  }, []);

  const setSelectedFormat = (selectedFormat) => {
    props.setSelectedFormat(selectedFormat);
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

  return (
    <>
      <Container>
        {console.log('user: ' + userPortfolio[0])}
        <div style={{ width: '1000px', margin: '100px 0px 100px 0px' }}>
          <Slider {...settings} style={{ marginLeft: '200px', marginRight: '50px' }}>
            {userPortfolio.map((data, index) => (
              <SelectCard id={index} key={index} format={data} setSelectedFormat={setSelectedFormat} />
            ))}
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default MyPortfolio;
