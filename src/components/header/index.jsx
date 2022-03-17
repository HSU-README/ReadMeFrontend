import React from 'react';
import styled from 'styled-components';
import logo from 'assets/images/logo.jpg';
import { Button } from '@mui/material';
import { maxWidth } from 'styles/mixin';
import colors from 'styles/colors';
import { Link } from 'react-router-dom';

export default function Header() {
  const moveHome = () => {
    window.location.href = '/';
  };
  return (
    <Container>
      <img src={logo} className="logo" onClick={moveHome} />

      <div className="section-login">
        <Link to={`/login`}>
          <div style={headerFont}>로그인</div>
        </Link>
        <Link to={`/signup`}>
          <div style={headerFont}>회원가입</div>
        </Link>
      </div>
    </Container>
  );
}

const headerFont = {
  fontSize: '18px',
  color: '#646464',
};

const Container = styled.div`
  ${maxWidth}
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  gap: 20px;
  border-bottom: 1px solid;
  border-color: ${colors.footerLine};

  .copyright {
    font-size: 18px;
  }

  .logo {
    width: 120px;
    height: 48px;
    margin-right: 40px;
  }

  .section-login {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 160px;
  }
`;
