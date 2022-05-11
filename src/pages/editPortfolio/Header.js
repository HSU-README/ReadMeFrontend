import React, { useState, useEffect } from 'react';
import logo from 'assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import { FormControl,TextField, Input } from '@mui/material';
import { Container, headerFont } from '../../components/header/styles';
import prevIcon from '../../assets/images/backArrow.png';
export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  const headerFont={
    fontSize:"24px",
    color:"#646464",
    marginRight:"20px",
    cursor:'pointer',
  }
  const moveHome = () => {
    window.location.href = '/';
  };

  useEffect(() => {
    const readme_login = localStorage.getItem('readme_login');
    const readme_userInfo = localStorage.getItem('readme_userInfo');
    if (readme_login && readme_userInfo) {
      setIsLoggedIn(true);
      setUserInfo(readme_userInfo);
    }
  }, []);

  return (
    <Container>
      <img 
        src={prevIcon}
        onClick={()=>{}}
        style={{width:"30px", height:"20px",marginTop:"20px",marginLeft:"50px"}}
        />
      <img
        src={logo}
        onClick={moveHome}
        style={{ cursor: 'pointer',width:"120px", height:'50px', marginLeft:'80px'}}
      />

      <div className="section-login">
        {isLoggedIn ? (
          <>
            <div style={{
                  martginTop:"5px",
                  fontSize: '20px',
                  color: '#646464',
                  marginRight: '20px',
                  cursor: 'pointer',
                }}>
              <p>{JSON.parse(userInfo).name}님</p>
            </div>
            <Link
              to={`/`}
              style={{ textDecoration: 'none' }}
              onClick={() => {
                setIsLoggedIn(false);
                setUserInfo(undefined);
                localStorage.clear();
              }}
            >
              <div style={{
                  marginTop:"5px",
                  fontSize: '20px',
                  color: '#646464',
                  marginRight: '20px',
                  cursor: 'pointer',
                }}>로그아웃</div>
            </Link>
            <Link to={`/mypage`} style={{ textDecoration: 'none' }}>
              <div style={headerFont}>마이페이지</div>
            </Link>
          </>
        ) : (
          <>
            <Link to={`/login`} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  marginTop:"5px",
                  fontSize: '20px',
                  color: '#646464',
                  marginRight: '20px',
                  cursor: 'pointer',
                }}
              >
                로그인
              </div>
            </Link>
            <Link to={`/signup`} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  marginTop:"5px",
                  fontSize: '20px',
                  color: '#646464',
                  marginRight: '20px',
                  cursor: 'pointer',
                }}
              >
                회원가입
              </div>
            </Link>
          </>
        )}
      </div>
    </Container>
  );
}
