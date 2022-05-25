import React, { useEffect, useState } from 'react';
import { Container } from 'pages/allPortfolio/styles';
import Header from 'components/header';
import Footer from 'components/footer/index.jsx';
import Modal from 'components/modal/index.jsx';
import { getAllPortfolio } from 'apis/portfolioApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import MainSelectCard from 'components/mainSelectCard';

const AllPortfolio = (props) => {
  const [userPortfolio, setUserPortfolio] = useState([{}]);
  const [allPortfolio, setAllPortfolio] = useState([]);
  const [allPortfolioCnt, setAllPortfolioCnt] = useState(0);

  useEffect(() => {
    async function fetchAllPortfolioData() {
      const datas = await getAllPortfolio();
      setAllPortfolio(datas);
      setAllPortfolioCnt(datas.length);
    }
    fetchAllPortfolioData();
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
            {allPortfolio.map((data, index) => (
              <SwiperSlide>
                <MainSelectCard id={index} key={index} length={allPortfolio.length} data={data} />
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
