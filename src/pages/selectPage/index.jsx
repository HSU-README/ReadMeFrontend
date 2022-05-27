import React, { useEffect, useState } from 'react';
import { Container } from 'pages/allPortfolio/styles';
import MainSelectCard from 'components/mainSelectCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Header from 'components/header';
import Footer from 'components/footer';
import basicSelect from 'localData/basicSelect.json';
import NewGenerateCard from 'components/newGenerateCard';

const SelectPortfolio = () => {
  const datas = basicSelect.data;

  return (
    <>
      <Container>
        <Header />
        <div className="sectionFont">양식 선택</div>
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
            <SwiperSlide>
              <NewGenerateCard />
            </SwiperSlide>
            {datas.map((data, index) => (
              <SwiperSlide>
                <MainSelectCard key={index} data={data.result} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default SelectPortfolio;
