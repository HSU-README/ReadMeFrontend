import React, { useEffect, useState } from 'react';
import { Container } from 'pages/myPage/pickPofol/styles';
import MainSelectCard from 'components/mainSelectCard';
import { getUserLikePortfolio } from 'apis/likeApi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const PickPofol = (props) => {
  const [userLikePortfolio, setUserLikePortfolio] = useState([]);
  const userId = JSON.parse(localStorage.getItem('readme_userInfo')).id;

  useEffect(() => {
    async function fetchUserLikePortfolioData() {
      const datas = await getUserLikePortfolio(userId);
      console.log(datas);
      await setUserLikePortfolio(datas);
    }
    fetchUserLikePortfolioData();
  }, []);

  if (userLikePortfolio.length === 0) {
    return (
      <div style={{ fontSize: '40px', margin: '220px 600px' }}>
        <img src={require('assets/images/not_found_icon.png')} style={{ width: '507px', height: '301px' }} />
        <br />
        <strong>찾으시는 포트폴리오가 없어요!</strong>
      </div>
    );
  }

  return (
    <>
      <Container>
        <div style={{ width: '1400px', margin: '100px 0px 100px 90px', overflow: 'auto', display: 'flex' }}>
          <Swiper
            slidesPerView={5}
            grid={{
              rows: 2,
            }}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
            {userLikePortfolio.map((data, index) => (
              <SwiperSlide>
                <MainSelectCard key={index} data={data} length={userLikePortfolio.length} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </>
  );
};

export default PickPofol;
