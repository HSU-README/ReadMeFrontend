import React, { useEffect, useState } from 'react';
import { Container } from 'pages/myPage/pickPofol/styles';
import SelectCard from 'components/selectCard';
import { getUserLikePortfolio } from 'apis/likeApi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const PickPofol = (props) => {
  const [userLikePortfolio, setUserLikePortfolio] = useState([{}]);
  const userId = JSON.parse(localStorage.getItem('readme_userInfo')).id;

  useEffect(() => {
    async function fetchUserLikePortfolioData() {
      const datas = await getUserLikePortfolio(userId);
      console.log(datas);
      await setUserLikePortfolio(datas);
    }
    fetchUserLikePortfolioData();
  }, []);

  const setSelectedFormat = (selectedFormat) => {
    props.setSelectedFormat(selectedFormat);
  };

  if (userLikePortfolio.length === 0) {
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
        {console.log(userLikePortfolio)}
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
            {userLikePortfolio.map((data, index) => (
              <SwiperSlide>
                <SelectCard
                  id={index}
                  key={index}
                  length={userLikePortfolio.length}
                  format={data}
                  setSelectedFormat={setSelectedFormat}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </>
  );
};

export default PickPofol;
