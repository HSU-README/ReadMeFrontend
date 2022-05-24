import React, { useEffect, useState } from 'react';
import { Container } from 'pages/allPortfolio/styles';
import SelectCard from 'components/selectCard';
import Header from 'components/header';
import Footer from 'components/footer/index.jsx';
import Modal from 'components/modal/index.jsx';
import { getUserPortfolio } from 'apis/portfolioApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const AllPortfolio = (props) => {
  const [userPortfolio, setUserPortfolio] = useState([{}]);
  const userId = JSON.parse(localStorage.getItem('readme_userInfo')).id;

  const [selectedFormat, setSelectedFormat] = useState('');
  const [detailFormId, setDetailFormId] = useState('');
  const [showDetailForm, setShowDetailForm] = useState(false);

  const openDetailForm = (id) => {
    setShowDetailForm(true);
    setDetailFormId(id);
  };

  const closeDetailForm = () => {
    setShowDetailForm(false);
    setDetailFormId('');
    setSelectedFormat('');
  };

  useEffect(() => {
    async function fetchUserPortfolioData() {
      const datas = await getUserPortfolio(userId);
      await setUserPortfolio(datas);
    }
    fetchUserPortfolioData();
  }, []);

  if (userPortfolio.length === 0) {
    return (
      <div style={{ fontSize: '40px', margin: '220px 300px' }}>
        <img src={require('assets/images/not_found_icon.png')} style={{ width: '200px', height: '200px' }} />
        찾으시는 포트폴리오가 없어요!
      </div>
    );
  }

  return (
    <>
      <Container>
        {selectedFormat !== '' ? (
          <Modal detailFormId={detailFormId} previewId={selectedFormat} closeDetailForm={closeDetailForm} />
        ) : (
          <></>
        )}
        <Header />
        <div>
          <Swiper
            slidesPerView={5}
            grid={{
              rows: 2,
            }}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
            {userPortfolio.map((data, index) => (
              <SwiperSlide>
                <SelectCard
                  id={index}
                  key={index}
                  length={userPortfolio.length}
                  format={data}
                  setSelectedFormat={setSelectedFormat}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default AllPortfolio;
