import React, { useState } from 'react';
import {
  Container,
  MyPageContainer,
  MenuContainer,
  ViewContainer,
  UserInfoMenu,
  PickPofolMenu,
  MyPortfolioMenu,
} from 'pages/myPage/styles';
import Footer from 'components/footer/index.jsx';
import Header from 'components/header';
import UserInfo from 'pages/myPage/userInfo';
import MyPortfolio from './myPortfolio';
import PickPofol from './pickPofol';

const MyPage = () => {
  const [currentMyPage, setCurrentMyPage] = useState('userInfo');

  return (
    <Container>
      <Header />
      <MyPageContainer>
        <MenuContainer>
          <div className="myPageTitle">마이페이지</div>
          <UserInfoMenu
            currentMyPage={currentMyPage}
            className="myPageSelect"
            onClick={() => {
              setCurrentMyPage('userInfo');
            }}
          >
            사용자 정보
          </UserInfoMenu>
          <PickPofolMenu
            currentMyPage={currentMyPage}
            className="myPageSelect"
            onClick={() => {
              setCurrentMyPage('pickPofol');
            }}
          >
            Pick Pofol
          </PickPofolMenu>
          <MyPortfolioMenu
            currentMyPage={currentMyPage}
            className="myPageSelect"
            onClick={() => {
              setCurrentMyPage('myPortfolio');
            }}
          >
            나의 포트폴리오
          </MyPortfolioMenu>
        </MenuContainer>
        <ViewContainer>
          {currentMyPage === 'userInfo' && <UserInfo />}
          {currentMyPage === 'pickPofol' && <PickPofol />}
          {currentMyPage === 'myPortfolio' && <MyPortfolio />}
        </ViewContainer>
      </MyPageContainer>
      <Footer />
    </Container>
  );
};

export default MyPage;
