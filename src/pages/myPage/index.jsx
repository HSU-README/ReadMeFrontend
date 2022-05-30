import React, { useState, useEffect } from 'react';
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
import { deletePortfolio, getUserPortfolio } from 'apis/portfolioApi';
import { Dialog, DialogContent, DialogActions, DialogContentText, Button } from '@mui/material';
import { deletePofolState, deletePofolDocIdState, userPortfolioState, openDialogState } from 'recoil/atoms';
import { useRecoilState, useResetRecoilState } from 'recoil';
const MyPage = () => {
  const [currentMyPage, setCurrentMyPage] = useState('userInfo');

  const userId = JSON.parse(localStorage.getItem('readme_userInfo')).id;
  const [userPortfolio, setUserPortfolio] = useRecoilState(userPortfolioState);
  const [deleteState, setDeleteState] = useRecoilState(deletePofolState);
  const [deletePofolDocId, setDeletePofolDocId] = useRecoilState(deletePofolDocIdState);
  const [openDialog, setOpenDialog] = useRecoilState(openDialogState);

  const handleClose = () => {
    setOpenDialog(false);
    setDeleteState(false);
    setDeletePofolDocId(0);
  };

  const changeUserPortfolio = (docId) => {
    setUserPortfolio(userPortfolio.filter((data) => data.docId !== docId));

    console.log(docId);
  };

  useEffect(() => {
    async function fetchUserPortfolioData() {
      const datas = await getUserPortfolio(userId);
      await setUserPortfolio(datas);
    }
    fetchUserPortfolioData();
  }, []);

  return (
    <Container>
      {deleteState ? (
        <Dialog
          open={openDialog}
          onClose={handleClose}
          PaperProps={{ sx: { textAlign: 'center', width: '20%', height: '16%', padding: '10px' } }}
        >
          <DialogContent>
            <DialogContentText style={{ color: 'black', fontSize: '28px', fontWeight: 'bold' }}>
              문서를 삭제하시겠습니까?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              style={{ backgroundColor: 'black', color: 'white', marginRight: '10px', fontWeight: 'bold' }}
              onClick={handleClose}
            >
              취소
            </Button>
            <Button
              style={{ backgroundColor: 'black', color: 'white' }}
              onClick={async () => {
                handleClose();
                await changeUserPortfolio(deletePofolDocId);
                await deletePortfolio(deletePofolDocId);
              }}
            >
              확인
            </Button>
          </DialogActions>
        </Dialog>
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
