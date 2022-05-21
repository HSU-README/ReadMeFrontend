import React, { useCallback, useState } from 'react';
import axios from 'axios';
import useInput from 'hooks/useInput';
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
import { Link, useNavigate } from 'react-router-dom';
import { ToastError, ToastSuccess } from 'hooks/toastHook';
import { API_ENDPOINT } from 'apis/constant';
import Header from 'components/header';
import UserInfo from 'pages/myPage/userInfo';
import MyPortfolio from './myPortfolio';
import PickPofol from './pickPofol';
import Modal from 'components/modal/index.jsx';

const MyPage = (props) => {
  const [currentMyPage, setCurrentMyPage] = useState('userInfo');
  const [selectedFormat, setSelectedFormat] = useState('');
  const [detailFormId, setDetailFormId] = useState('');
  const [showDetailForm, setShowDetailForm] = useState(false);

  const openDetailForm = (id) => {
    setShowDetailForm(true);
    setDetailFormId(id);
  };

  const closeDetailForm = () => {
    setShowDetailForm(false);
    setDetailFormId('');
    setSelectedFormat('');
  };

  return (
    <Container>
      {selectedFormat !== '' ? (
        <Modal detailFormId={detailFormId} previewId={selectedFormat} closeDetailForm={closeDetailForm} />
      ) : (
        <></>
      )}
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
            {' '}
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
          {currentMyPage === 'pickPofol' && <PickPofol setSelectedFormat={setSelectedFormat}/>}
          {currentMyPage === 'myPortfolio' && <MyPortfolio setSelectedFormat={setSelectedFormat} />}
        </ViewContainer>
      </MyPageContainer>
      <Footer />
    </Container>
  );
};

export default MyPage;
