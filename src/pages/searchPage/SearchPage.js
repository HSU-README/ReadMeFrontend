import React, { useEffect, useState, useCallback } from 'react';
import { getSearchPortfolio } from 'apis/portfolioApi';

import Header from '../home/header/Header.js';
import colors from 'styles/colors.js';
import Slider from 'react-slick';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Footer from 'components/footer/index.jsx';

import './SearchPage.css';
import MainSelectCard from 'components/mainSelectCard';
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      src={require('../../assets/images/prevArrow.png')}
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
      src={require('../../assets/images/nextArrow.png')}
      alt="next"
      style={{ ...style, width: '15px', height: '15px' }}
      onClick={onClick}
    />
  );
};

const SearchPage = () => {
  const [searchPortfolio, setSearchPortfolio] = useState([{}]);
  const [selectedFormat, setSelectedFormat] = useState('');
  const [showDetailForm, setShowDetailForm] = useState(false);
  const [size, setSize] = useState(0);
  const [detailFormId, setDetailFormId] = useState('');
  const settings = {
    rows: 2,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    sliderPerRow: 3,
    slidesToShow: searchPortfolio.length > 3 ? 3 : 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  useEffect(() => {
    async function getSearhResult() {
      const searchParams = new URLSearchParams(window.location.search);
      var text;
      for (const param of searchParams) {
        text = param[1];
      }
      const datas = await getSearchPortfolio(`${text}`);
      await setSearchPortfolio(datas);
    }
    getSearhResult();
    console.log(searchPortfolio);
  }, []);

  return (
    <>
      <Header />
      <hr style={{ backgroundColor: '#F57842' }} />

      {
        <div style={{ marginTop: '120px', marginBottom: '350px' }}>
          {searchPortfolio.length !== undefined ? (
            searchPortfolio.length !== 0 ? (
              <Slider {...settings} className="slick">
                {searchPortfolio.map((data, index) => data.visibility === 'PUBLIC' && <MainSelectCard data={data} />)}
              </Slider>
            ) : (
              <div style={{ fontSize: '40px', marginTop: '300px' }}>
                <img
                  src={require('../../assets/images/not_found_icon.png')}
                  style={{ width: '507px', height: '301px' }}
                  alt={'empty'}
                />
                <br />
                <strong>찾으시는 포트폴리오가 없어요!</strong>
              </div>
            )
          ) : (
            <></>
          )}
        </div>
      }
      <Footer />
    </>
  );
};

export default SearchPage;
