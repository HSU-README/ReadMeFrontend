import React from 'react';
import logo from 'assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import { Container, headerFont } from './styles';

export default function Header() {
  const moveHome = () => {
    window.location.href = '/';
  };
  return (
    <Container>
      <img src={logo} className="logo" onClick={moveHome} style={{ cursor: 'pointer', marginTop: '0px' }} />

      <div className="section-login">
        <Link to={`/login`} style={{ textDecoration: 'none' }}>
          <div style={headerFont}>로그인</div>
        </Link>
        <Link to={`/signup`} style={{ textDecoration: 'none' }}>
          <div style={headerFont}>회원가입</div>
        </Link>
      </div>
    </Container>
  );
}
