import React, { useState, useEffect } from 'react';
import Header from 'components/header';
import Footer from 'components/footer/index.jsx';
import { TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { ToastError, ToastSuccess } from '../../hooks/toastHook';
import Logo from 'assets/images/logo.jpg';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { API_ENDPOINT } from '../../apis/constant';
import { useNavigate } from 'react-router-dom';
import LineAndDepartment from './LineAndDepartment';
import { Container, SignupContainer, Button } from 'pages/signup/styles';
const Signup = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');
  const [major, setMajor] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(true);
  const navigate = useNavigate();
  const serverApi = axios.create({
    baseURL: `${API_ENDPOINT}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const sign = async () => {
    console.log(name);
    console.log(password);
    console.log(email);
    await serverApi
      .post('/api/v1/member/new', {
        name: `${name}`,
        email: `${email}`,
        password: `${password}`,
        university: `${university}`,
        major: `${major}`,
      })
      .then((response) => {
        const successMessage = JSON.stringify(response.data.message);
        ToastSuccess(successMessage);
        navigate('/', {
          state: { isLoginSuccess: true },
        });
      })
      .catch((err) => {
        const errorMessage = JSON.stringify(err.response.data.errorMessage);
        ToastError(errorMessage);
      });
  };

  return (
    <Container>
      <Header />
      <SignupContainer>
        <div className="logo-wrapper">
          <img className="logo" src={Logo} alt="logo" />
        </div>

        <TextField
          placeholder="이름"
          label="이름"
          value={name}
          variant="outlined"
          size="small"
          style={{ margin: '15px', width: '300px' }}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        <TextField
          placeholder="aaa@naver.com"
          label="이메일"
          value={email}
          variant="outlined"
          size="small"
          style={{ margin: '15px', width: '300px' }}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <TextField
          placeholder="비밀번호"
          label="비밀번호"
          variant="outlined"
          value={password}
          size="small"
          style={{ margin: '15px', width: '300px' }}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <TextField
          placeholder="한성대학교"
          label="학교(선택)"
          value={university}
          variant="outlined"
          size="small"
          style={{ margin: '15px', width: '300px' }}
          onChange={(event) => {
            setUniversity(event.target.value);
          }}
        />
        <br />
        <div>
          <LineAndDepartment setMajor={setMajor} />
        </div>

        <br />
        <div className="button-wrapper">
          <Button onClick={sign}>회원가입</Button>
        </div>
      </SignupContainer>
      <Footer />
    </Container>
  );
};

export default Signup;
