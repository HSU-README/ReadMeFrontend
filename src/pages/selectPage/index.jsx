import React from 'react';
import { Container } from 'pages/selectPage/styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Header from 'components/header';
import Footer from 'components/footer';
import basicSelect from 'localData/basicSelect.json';
import NewGenerateCard from 'components/newGenerateCard';
import BasicSelectCard from 'components/basicSelectCard';

const SelectPortfolio = () => {
  const datas = basicSelect.data;

  return (
    <>
      <Container>
        <Header />
        <div className="sectionFont">양식 선택</div>
        <div
          style={{
            width: '60%',
            margin: '-30px 0px 50px 400px',
            height: '130vh',
            backgroundColor: '#f8f9fa',
          }}
        >
          <Swiper
            slidesPerView={3}
            grid={{
              rows: 2,
            }}
            spaceBetween={5}
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
                <BasicSelectCard key={index} data={data.result} />
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
