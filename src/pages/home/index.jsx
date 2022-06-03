import React, { useState, useEffect } from 'react';
import Header from './header/Header.js';
import 'react-toastify/dist/ReactToastify.css';
import { getMostLikePortfolio, getAllPortfolio, getMajorPortfolio } from 'apis/portfolioApi';
import './index.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import prevArrow from '../../assets/images/prevArrow.png';
import nextArrow from '../../assets/images/nextArrow.png';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Footer from 'components/footer/index.jsx';
import Banner from './header/Banner.js';
import MainSelectCard from 'components/mainSelectCard/index.jsx';
import colors from 'styles/colors.js';

const Home = () => {
  const [mostLikePortfolio, setMostLikePortfolio] = useState([]);
  const [allPortfolio, setAllPortfolio] = useState([]);

  const { loginCheck } = useSelector((state) => state.loginCheck);

  const [sliderCount, setSliderCount] = useState(4); //기본화면에서 4개
  useEffect(() => {
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
    });
    async function fetchMostLikePortfolioData() {
      const datas = await getMostLikePortfolio();
      setMostLikePortfolio(datas);
    }
    async function fetchAllPortfolioData() {
      const datas = await getAllPortfolio();
      setAllPortfolio(datas);
    }
    async function fetchMajorPortfolioData() {
      if (localStorage.getItem('readme_userInfo') != null) {
        const userId = JSON.parse(localStorage.getItem('readme_userInfo')).id;
        await getMajorPortfolio(userId);
      }
    }
    fetchMostLikePortfolioData();
    fetchAllPortfolioData();
    fetchMajorPortfolioData();
  }, []);

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
    <div style={{ position: 'relative', backgroundColor: '#F8F9FA' }}>
      <Header />
      <div>
        <Banner />
      </div>
      <div></div>

      {loginCheck && (
        <>
          <br />
          <div className="pofolBtnHeader">
            <NavLink className="pofolBtn" to="/select" style={{ textDecoration: 'none', color: 'white' }}>
              <button className="pofolBtn">포트폴리오 만들기</button>
            </NavLink>
          </div>
        </>
      )}

      <div className="sectionFont">인기 포트폴리오</div>
      <Slider {...settings} style={{ marginLeft: '10%', marginRight: '9%' }}>
      </Slider>

      <div className="sectionFont">
        전체 포트폴리오
        <Link
          to={'/all'}
          style={{
            textDecoration: 'none',
            color: colors.gray,
            fontSize: '20px',
            lineHeight: '50px',
            marginLeft: '18px',
          }}
        >
          <h6 style={{ color: colors.gray, lineHeight: '40px' }}>+ 더보기 </h6>
        </Link>
      </div>
      <Slider {...settings} style={{ marginLeft: '10%', marginRight: '9%' }}>
        {allPortfolio.map((data, index) => data.visibility === 'PUBLIC' && <MainSelectCard data={data} />)}
      </Slider>

      <div className="sectionFont">학과별 포트폴리오</div>
      <Slider {...settings} style={{ marginLeft: '10%', marginRight: '9%' }}>
        {allPortfolio.map((data, index) => data.visibility === 'PUBLIC' && <MainSelectCard data={data} />)}
      </Slider>

      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
