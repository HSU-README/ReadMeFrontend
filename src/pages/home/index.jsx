import React, { useCallback, useState, useEffect, useRef } from 'react';
import Header from './header/Header.js';
import 'react-toastify/dist/ReactToastify.css';
import { getMostLikePortfolio } from 'apis/portfolioApi';
import './index.css';
import DocCard from './DoCard.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import prevArrow from '../../assets/images/prevArrow.png';
import nextArrow from '../../assets/images/nextArrow.png';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'components/modal/index.jsx';
import { NavLink } from 'react-router-dom';
import Footer from 'components/footer/index.jsx';
import Banner from './header/Banner.js';
import MainSelectCard from 'components/mainSelectCard/index.jsx';
const Home = () => {
  const [mostLikePortfolio, setMostLikePortfolio] = useState([]);
  const [mostLikeProtfolioCnt, setMostLikePortfolioCnt] = useState(0);

  const [showDetailForm, setShowDetailForm] = useState(false);
  const [detailFormId, setDetailFormId] = useState(0);
  const [alertMessageVisible, setAlertMessageVisible] = useState(false);
  const { loginCheck } = useSelector((state) => state.loginCheck);
  const openDetailForm = (id) => {
    console.log(id);
    setShowDetailForm(true);
    setDetailFormId(1);
  };

  const closeDetailForm = () => {
    setShowDetailForm(false);
    setDetailFormId('');
  };

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
      console.log(datas);
      await setMostLikePortfolio(datas);
      await setMostLikePortfolioCnt(datas.length);
    }
    fetchMostLikePortfolioData();
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

  const RecommendPortFolio = ({ isLogin }) => {
    return (
      <span>
        <div className="sectionFont">
          <span>나의 포트폴리오</span>
        </div>

        <Slider {...settings} style={{ marginLeft: '10%', marginRight: '9%' }}></Slider>

        <div className="sectionFont">
          <span>학과별 포트폴리오</span>
        </div>
        <Slider {...settings} style={{ marginLeft: '10%', marginRight: '9%', marginBottom: '50px' }}></Slider>
      </span>
    );
  };

  const dummyData = [
    {
      docId: 40,
      title: 't1',
      docDate: '2022-05-25T06:50:07',
      visibility: 'PUBLIC',
      tags: [
        {
          name: '#사회',
        },
      ],
      likes: [
        {
          id: 42,
          memberId: 1,
          docId: 40,
        },
      ],
      likeCnt: 1,
      docUrl:
        'https://firebasestorage.googleapis.com/v0/b/fir-readme-storage.appspot.com/o/preview1?alt=media&token=ce97b277-cc2b-4080-889b-3b57ea46267c',
      major: null,
      designer: 'test6',
      designerUrl: '',
    },
    {
      docId: 40,
      title: 't1',
      docDate: '2022-05-25T06:50:07',
      visibility: 'PUBLIC',
      tags: [
        {
          name: '#사회',
        },
      ],
      likes: [
        {
          id: 42,
          memberId: 1,
          docId: 40,
        },
      ],
      likeCnt: 1,
      docUrl:
        'https://firebasestorage.googleapis.com/v0/b/fir-readme-storage.appspot.com/o/preview1?alt=media&token=ce97b277-cc2b-4080-889b-3b57ea46267c',
      major: null,
      designer: 'test6',
      designerUrl: '',
    },
    {
      docId: 40,
      title: 't1',
      docDate: '2022-05-25T06:50:07',
      visibility: 'PUBLIC',
      tags: [
        {
          name: '#사회',
        },
      ],
      likes: [
        {
          id: 42,
          memberId: 1,
          docId: 40,
        },
      ],
      likeCnt: 1,
      docUrl:
        'https://firebasestorage.googleapis.com/v0/b/fir-readme-storage.appspot.com/o/preview1?alt=media&token=ce97b277-cc2b-4080-889b-3b57ea46267c',
      major: null,
      designer: 'test6',
      designerUrl: '',
    },
    {
      docId: 40,
      title: 't1',
      docDate: '2022-05-25T06:50:07',
      visibility: 'PUBLIC',
      tags: [
        {
          name: '#사회',
        },
      ],
      likes: [
        {
          id: 42,
          memberId: 1,
          docId: 40,
        },
      ],
      likeCnt: 1,
      docUrl:
        'https://firebasestorage.googleapis.com/v0/b/fir-readme-storage.appspot.com/o/preview1?alt=media&token=ce97b277-cc2b-4080-889b-3b57ea46267c',
      major: null,
      designer: 'test6',
      designerUrl: '',
    },
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
            <button className="pofolBtn">
              <NavLink className="pofolBtn" to="/select" style={{ textDecoration: 'none', color: 'white' }}>
                포트폴리오 만들기
              </NavLink>
            </button>
          </div>
        </>
      )}

      <div className="sectionFont">인기 포트폴리오</div>
      <Slider {...settings} style={{ marginLeft: '10%', marginRight: '9%' }}>
        {mostLikePortfolio.map((data, index) => (
          <MainSelectCard data={data} />
        ))}
        {mostLikeProtfolioCnt <= 4 ? dummyData.map((data, index) => <MainSelectCard data={data} />) : <></>}
      </Slider>
      {loginCheck ? (
        <RecommendPortFolio isLogin="true" />
      ) : (
        <div
          onClick={() => {
            setAlertMessageVisible(true);
          }}
        >
          <RecommendPortFolio isLogin="false" />
        </div>
      )}
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
