import React from 'react';
import { Container } from 'pages/myPage/myPortfolio/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import DeleteSelectCard from 'components/deleteSelectCard';
import { userPortfolioState } from 'recoil/atoms';
import { useRecoilState } from 'recoil';

const MyPortfolio = () => {
  const [userPortfolio, setUserPortfolio] = useRecoilState(userPortfolioState);

  if (userPortfolio.length === 0) {
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
        <div style={{ width: '1600px', margin: '100px 0px 100px 190px', overflow: 'auto', display: 'flex' }}>
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
            {userPortfolio.map((data, index) => (
              <SwiperSlide>
                <DeleteSelectCard key={index} data={data} length={userPortfolio.length} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </>
  );
};

export default MyPortfolio;
