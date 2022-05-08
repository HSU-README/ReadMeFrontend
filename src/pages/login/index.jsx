import React, { useCallback, useState } from 'react';
import axios from 'axios';
import useInput from 'hooks/useInput';
import colors from 'styles/colors';
import Logo from 'assets/images/logo.jpg';
import { FormControlLabel, Checkbox } from '@mui/material';
import { Container, LoginContainer, Button, Error, Input } from 'pages/login/styles';
import Footer from 'components/footer/index.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { ToastError, ToastSuccess } from 'hooks/toastHook';
import { API_ENDPOINT } from 'apis/constant';
import Header from 'components/header';

const LogIn = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [logInError, setLogInError] = useState(false);
  const navigate = useNavigate();
  const serverApi = axios.create({
    baseURL: `${API_ENDPOINT}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const login = async () => {
    await serverApi
      .post(`/api/v1/members/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        const userInfo = JSON.stringify(response.data.result);
        const successMessage = JSON.stringify(response.data.message);

        localStorage.setItem('readme_login', 'true');
        localStorage.setItem('readme_userInfo', userInfo);
        //로그인이 성공할 경우 props에 isLoginSuccess를 true로 보냄.
        navigate('/', {
          state: {
            isLoginSuccess: true,
          },
        });
        ToastSuccess(successMessage);
      })
      .catch((error) => {
        const errorMessage = JSON.stringify(error.response.data.errorMessage);
        ToastError(errorMessage);
      });
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLogInError(false);
      login();
    },
    [email, password],
  );

  return (
    <Container>
      <Header />
      <LoginContainer>
        <div className="logo-wrapper">
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div className="input-wrapper">
          <Input
            variant="outlined"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChangeEmail}
            placeholder="이메일 주소"
          />
          <Input
            style={{ marginBottom: '0px' }}
            variant="outlined"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChangePassword}
            placeholder="비밀번호"
          />
        </div>
        <div className="checkbox-wrapper">
          <FormControlLabel control={<Checkbox />} label="로그인 상태 유지" />
        </div>
        {logInError && <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>}
        <div className="button-wrapper">
          <Button onClick={onSubmit}>로그인</Button>
        </div>
        <div className="login-find">
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <span className="login-find-content">회원가입</span>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <span
              className="login-find-content"
              style={{ borderLeft: '1px solid', borderRight: '1px solid', borderColor: `${colors.loginText}` }}
            >
              아이디찾기
            </span>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <span className="login-find-content">비밀번호찾기</span>
          </Link>
        </div>
      </LoginContainer>
      <Footer />
    </Container>
  );
};

export default LogIn;
