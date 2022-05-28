import React, { useEffect, useState } from 'react';
import { Container } from 'pages/allPortfolio/styles';
import MainSelectCard from 'components/mainSelectCard';
import { getAllPortfolio } from 'apis/portfolioApi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Header from 'components/header';
import Footer from 'components/footer';

const AllPortfolio = (props) => {
  const [userLikePortfolio, setUserLikePortfolio] = useState([]);
  const userId = JSON.parse(localStorage.getItem('readme_userInfo')).id;

  useEffect(() => {
    async function fetchUserLikePortfolioData() {
      const datas = await getAllPortfolio();
      console.log(datas);
      await setUserLikePortfolio(datas);
    }
    fetchUserLikePortfolioData();
  }, []);

  if (userLikePortfolio.length === 0) {
    return (
      <div style={{ fontSize: '40px', margin: '220px 300px' }}>
        <img src={require('assets/images/not_found_icon.png')} style={{ width: '507px', height: '301px' }} />
        <br />
        <strong>찾으시는 포트폴리오가 없어요!</strong>
      </div>
    );
  }

  return (
    <>
      <Container>
        <Header />
        <div className="sectionFont">전체 포트폴리오</div>
        <div
          style={{
            width: '1600px',
            margin: '-30px 0px 50px 100px',
            height: '85vh',
          }}
        >
          <Swiper
            slidesPerView={5}
            grid={{
              rows: 2,
            }}
            spaceBetween={40}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
            {userLikePortfolio.map(
              (data, index) =>
                data.visibility === 'PUBLIC' && (
                  <SwiperSlide>
                    <MainSelectCard key={index} data={data} length={userLikePortfolio.length} />
                  </SwiperSlide>
                ),
            )}
          </Swiper>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default AllPortfolio;
