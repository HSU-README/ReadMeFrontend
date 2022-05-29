import React, { useEffect, useState } from 'react';
import { Container } from 'pages/myPage/myPortfolio/styles';
import { getUserPortfolio } from 'apis/portfolioApi';
import { deletePortfolio } from 'apis/portfolioApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import DeleteSelectCard from 'components/deleteSelectCard';

const MyPortfolio = () => {
  const [userPortfolio, setUserPortfolio] = useState([]);
  const userId = JSON.parse(localStorage.getItem('readme_userInfo')).id;

  const changeUserPortfolio = (docId) => {
    var result = userPortfolio.filter((data) => 
      data.docId !== docId
    )
    setUserPortfolio(result);
    console.log(docId);
  };

  useEffect(() => {
    async function fetchUserPortfolioData() {
      const datas = await getUserPortfolio(userId);
      await setUserPortfolio(datas);
      console.log("datas:",datas);
    }
    fetchUserPortfolioData();
  }, []);


  useEffect(()=>{
    console.log(userPortfolio)
  },[userPortfolio])

  if (userPortfolio.length === 0) {
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
        <div style={{ width: '1600px', margin: '100px 0px 100px 180px', overflow: 'auto', display: 'flex' }}>
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
       {userPortfolio.map((data, index) => {
         return(
              <SwiperSlide>
                <div
                  key={index}
                  onClick={async () => {
                    console.log('Test',data.docId);
                    await changeUserPortfolio(data.docId);
                    // await deletePortfolio(data.docId);
                  }}
                >
                  {data.docId}
                </div>
                <DeleteSelectCard
                  key={index}
                  data={data}
                  length={userPortfolio.length}
                  changeUserPortfolio={changeUserPortfolio}
                />
              </SwiperSlide>
         )
})}
          </Swiper>
        </div>
      </Container>
    </>
  );
};

export default MyPortfolio;