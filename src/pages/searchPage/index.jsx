import React, { useEffect, useState } from 'react';
import { Container } from 'pages/searchPage/styles';
import MainSelectCard from 'components/mainSelectCard';
import { getSearchPortfolio } from 'apis/portfolioApi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Header from 'components/header';
import Footer from 'components/footer';

const SearchPage = (props) => {
  const [searchPortfolio, setSearchPortfolio] = useState([]);
  const userId = JSON.parse(localStorage.getItem('readme_userInfo')).id;

  useEffect(() => {
    async function fetchSearchPortfolioData() {
      const searchParams = new URLSearchParams(window.location.search);
      let text;
      for (const param of searchParams) {
        text = param[1];
      }
      const datas = await getSearchPortfolio(`${text}`);
      await console.log(datas);
      await setSearchPortfolio(datas);
    }
    fetchSearchPortfolioData();
  }, []);

  if (searchPortfolio.length === 0) {
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
        <div className="sectionFont">검색 결과</div>
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
            {searchPortfolio.map(
              (data, index) =>
                data.visibility === 'PUBLIC' && (
                  <SwiperSlide>
                    <MainSelectCard key={index} data={data} length={searchPortfolio.length} />
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

export default SearchPage;
