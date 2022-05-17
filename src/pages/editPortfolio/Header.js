import React, { useState, useEffect } from 'react';
import logo from 'assets/images/logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { FormControl, TextField, Input } from '@mui/material';
import { Container, headerFont } from '../../components/header/styles';
import prevIcon from '../../assets/images/backArrow.png';
export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  const headerFont = {
    fontSize: '16px',
    color: '#646464',
    marginRight: '20px',
    cursor: 'pointer',
  };
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
  const history= useNavigate();
  return (
    <Container>
      <img
        src={prevIcon}
        onClick={() => {history(-1)}}
        style={{ width: '15px', height: '15px', marginTop: '10px', marginLeft: '15px',cursor:"pointer" }}
      />
      <img
        src={logo}
        onClick={moveHome}
        style={{ cursor: 'pointer', width: '85px', height: '36px', marginLeft: '250px' }}
      />

      <div className="section-login">
        {isLoggedIn ? (
          <>
            <div
              style={{
                fontSize: '16px',
                color: '#646464',
                marginRight: '15px',
                cursor: 'pointer',
              }}
            >
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
              <div
                style={{
                  fontSize: '16px',
                  color: '#646464',
                  marginRight: '15px',
                  cursor: 'pointer',
                }}
              >
                로그아웃
              </div>
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
                  marginTop: '5px',
                  fontSize: '16px',
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
                  marginTop: '5px',
                  fontSize: '16px',
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
