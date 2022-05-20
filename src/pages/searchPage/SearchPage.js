
import React, { useEffect, useState } from 'react';
import { Container } from 'pages/myPage/pickPofol/styles';
import SelectCard from 'components/selectCard';
import { getUserPortfolio } from 'apis/portfolioApi';
import Header from '../home/header/Header.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Footer from 'components/footer/index.jsx';
const SearchPage =()=>{
    const [userPortfolio, setUserPortfolio] = useState([{},{},{}]);


    return (
        <div >
        <Header/>
        <hr style={{backgroundColor:"#F57842"}}/>
        <div style={{width:"100%",height:"100vh"}}>
        <Container>
          {console.log(userPortfolio)}
          <div style={{ width: '1200px', margin: '100px 0px 100px 100px', overflow: 'auto', display: 'flex',border:"1px solid red" }}>
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
                  />
                  
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
        </div>
        <Footer/>
        </div>
    );
}

export default SearchPage;