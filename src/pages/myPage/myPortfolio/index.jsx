import React, { useEffect, useState } from 'react';
import { Container } from 'pages/myPage/myPortfolio/styles';
import SelectCard from 'components/selectCard';
import MainSelectCard from 'components/mainSelectCard';
import { getUserPortfolio } from 'apis/portfolioApi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const MyPortfolio = () => {
  const [userPortfolio, setUserPortfolio] = useState([{}]);
  const userId = JSON.parse(localStorage.getItem('readme_userInfo')).id;

  useEffect(() => {
    async function fetchUserPortfolioData() {
      const datas = await getUserPortfolio(userId);
      await setUserPortfolio(datas);
      console.log(datas);
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
        <div style={{ width: '1200px', margin: '100px 0px 100px 100px', overflow: 'auto', display: 'flex' }}>
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
                <MainSelectCard key={index} length={userPortfolio.length} data={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </>
  );
};

export default MyPortfolio;
