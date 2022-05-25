import React, { useEffect, useState, useCallback } from 'react';
import { Container } from '../select/styles';
import SelectCard from 'components/selectCard';
import { searchResult } from 'apis/portfolioApi';
import Modal from 'components/modal/index.jsx';
import Header from '../home/header/Header.js';
import Slider from 'react-slick';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import DocCard from 'pages/home/DoCard';
import Footer from 'components/footer/index.jsx';
import NewGenerateSelectCard from 'components/newGenerateCard';
import basicSelect from 'localData/basicSelect.json';
import { FormGroup } from '@mui/material';
import './SearchPage.css';
import MainSelectCard from 'components/mainSelectCard';
const datas = basicSelect.data;
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
    sliderPerRow:3,
    slidesToShow: searchPortfolio.length>3? 3:2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const openDetailForm = (data) => {
    console.log(data.docId);
    setSelectedFormat(data);
    setDetailFormId(data.docId);
    setShowDetailForm(true);
  };
  const closeDetailForm = () => {
    setShowDetailForm(false);
    setDetailFormId('');
    setSelectedFormat('');
  };
  useEffect(() => {
    async function getSearhResult() {
      const searchParams = new URLSearchParams(window.location.search);
      var text;
      for (const param of searchParams) {
        text = param[1];
      }
      const datas = await searchResult(`${text}`);
      await setSearchPortfolio(datas);
    }
    getSearhResult();
    console.log(searchPortfolio);
  }, []);

  return (
    <>
      <Header />
      <hr style={{ backgroundColor: '#F57842' }} />
      {showDetailForm === true ? (
        <Modal
          detailFormId={detailFormId}
          previewId={detailFormId}
          dummyData={selectedFormat}
          closeDetailForm={closeDetailForm}
        />
      ) : (
        <></>
      )}
      {
        <span>
          {searchPortfolio.length !== undefined ? (
            searchPortfolio.length !== 0 ? (
              <Slider {...settings} className="slick">
                {searchPortfolio.map((data, index) => data.visibility === 'PUBLIC' && <MainSelectCard data={data} />)}
              </Slider>
            ) : (
              <div style={{ fontSize: '40px', marginTop: '300px' }}>
                <img
                  src={require('../../assets/images/not_found_icon.png')}
                  style={{ width: '200px', height: '200px' }}
                  alt={'empty'}
                />
                찾으시는 포트폴리오가 없어요!
              </div>
            )
          ) : (
            <></>
          )}
       </span>
      }
      <Footer />
    </>
  );
};

export default SearchPage;
