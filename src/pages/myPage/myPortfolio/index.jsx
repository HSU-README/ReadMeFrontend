import React, { useEffect, useState } from 'react';
import { Container } from 'pages/myPage/myPortfolio/styles';
import SelectCard from 'components/selectCard';
import { getUserPortfolio } from 'apis/portfolioApi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const MyPortfolio = (props) => {
  const [userPortfolio, setUserPortfolio] = useState([{}]);
  const userId = JSON.parse(localStorage.getItem('readme_userInfo')).id;

  useEffect(() => {
    async function fetchUserPortfolioData() {
      const datas = await getUserPortfolio(userId);
      await setUserPortfolio(datas);
    }
    fetchUserPortfolioData();
  }, []);

  const setSelectedFormat = (selectedFormat) => {
    props.setSelectedFormat(selectedFormat);
  };

  if (userPortfolio === undefined) {
    return <></>;
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
      </Container>
    </>
  );
};

export default MyPortfolio;
