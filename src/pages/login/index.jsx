import React, { useCallback, useState } from 'react';
import axios from 'axios';
import useInput from '../../hooks/useInput';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { maxWidth } from '../../styles/mixin';
import Logo from '../../assets/images/logo.jpg';
import { FormControlLabel, Checkbox } from '@mui/material';
import { Button, Error, Input } from '../../pages/login/styles';
import { Link, useNavigate } from 'react-router-dom';
import { ToastError, ToastSuccess } from '../../hooks/toastHook';
import { API_ENDPOINT } from '../../apis/constant';
import Footer from '../../components/footer/index.jsx';

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

        navigate('/');
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
          <Link to="/signup">
            <span className="login-find-content">회원가입</span>
          </Link>
          <Link to="/login">
            <span
              className="login-find-content"
              style={{ borderLeft: '1px solid', borderRight: '1px solid', borderColor: `${colors.loginText}` }}
            >
              아이디찾기
            </span>
          </Link>
          <Link to="/login">
            <span className="login-find-content">비밀번호찾기</span>
          </Link>
        </div>
      </LoginContainer>
      <Footer />
    </Container>
  );
};

export default LogIn;

const Container = styled.div`
  ${maxWidth}
`;

const LoginContainer = styled.div`
  border: 5px solid;
  border-color: ${colors.loginBorder};
  border-radius: 15px;
  max-width: 900px;
  max-height: 800px;
  width: 60%;
  height: auto;
  margin: 100px auto;
  box-shadow: 25% 0px 20px 10px rgba(0, 0, 0, 0.2);

  .logo-wrapper {
    text-align: center;
    padding: 30px 0px 50px 0px;
  }
  .logo {
    width: 250px;
    height: 107px;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 0px auto;
    padding: 0px 50px 0px 50px;
  }

  .checkbox-wrapper {
    display: flex;
    justify-content: flex-start;
    max-width: 800px;
    margin: 0px auto;
    padding: 0px 50px 0px 50px;
    color: ${colors.loginText};
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    margin: 0px auto;
    padding: 30px 0px 20px 0px;
    max-width: 800px;
  }

  .login-find {
    text-align: center;
    margin-bottom: 100px;
  }
  .login-find-content {
    padding: 0px 15px;
    color: ${colors.loginText};
    font-size: 15px;
  }
`;
