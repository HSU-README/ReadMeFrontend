import React, { useState } from 'react';
import Header from 'components/header';
import Footer from 'components/footer/index.jsx';
import { TextField } from '@mui/material';
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
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');
  const [major, setMajor] = useState('');
  const navigate = useNavigate();
  const [nameValidation, setNameValidation] = useState('hidden');
  const [emailValidation, setEmailValidation] = useState('hidden');
  const [passwordValidation, setPasswordValidation] = useState('hidden');
  const [univercityValidation, setUniversityValidation] = useState('hidden');
  const [majorValidation, setMajorValidation] = useState('hidden');
  const serverApi = axios.create({
    baseURL: `${API_ENDPOINT}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const validation = () => {
    let chk = true;
    if (name === '') {
      setNameValidation('');
      chk = false;
    } else {
      setEmailValidation('hidden');
    }
    if (email === '' || /\S+@\S+\.\S+/.test(email) === false) {
      setEmailValidation('');
      chk = false;
    } else {
      setEmailValidation('hidden');
    }
    if (password === '') {
      console.log('here');
      setPasswordValidation('');
      chk = false;
    } else {
      setPasswordValidation('hidden');
    }
    if (university === '') {
      setUniversityValidation('');
      chk = false;
    } else {
      setUniversityValidation('hidden');
    }
    if (major === '') {
      setMajorValidation('');
      chk = false;
    } else {
      setMajorValidation('hidden');
    }
    return chk;
  };
  const sign = async () => {
    const validationResult = validation();
    if (validationResult) {
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
    }
  };
  return (
    <Container>
      <Header />
      <SignupContainer>
        <div className="logo-wrapper">
          <img className="logo" style={{ cursor: 'default' }} src={Logo} alt="logo" />
        </div>

        <TextField
          placeholder="??????"
          label="??????"
          value={name}
          variant="outlined"
          size="small"
          style={{ margin: '8px', width: '300px' }}
          onChange={(event) => {
            setName(event.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              sign();
            }
          }}
        />
        <div
          style={{
            fontSize: '15px',
            textAlign: 'left',
            margin: '0 auto',
            width: '300px',
            color: 'red',
            visibility: `${nameValidation}`,
          }}
        >
          ????????? ??????????????????!
        </div>
        <TextField
          placeholder="aaa@naver.com"
          label="?????????"
          value={email}
          variant="outlined"
          size="small"
          style={{ margin: '8px', width: '300px' }}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              sign();
            }
          }}
        />
        <div
          style={{
            fontSize: '15px',
            textAlign: 'left',
            margin: '0 auto',
            width: '300px',
            color: 'red',
            visibility: `${emailValidation}`,
          }}
        >
          ????????? ???????????? ??????????????????!
        </div>

        <TextField
          placeholder="????????????"
          label="????????????"
          variant="outlined"
          value={password}
          size="small"
          type="password"
          style={{ margin: '8px', width: '300px' }}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              sign();
            }
          }}
        />
        <div
          style={{
            fontSize: '15px',
            textAlign: 'left',
            margin: '0 auto',
            width: '300px',
            color: 'red',
            visibility: `${passwordValidation}`,
          }}
        >
          ????????? ??????????????? ??????????????????!
        </div>
        <TextField
          placeholder="???????????????"
          label="??????"
          value={university}
          variant="outlined"
          size="small"
          style={{ margin: '8px', width: '300px' }}
          onChange={(event) => {
            setUniversity(event.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sign();
            }
          }}
        />
        <div
          style={{
            fontSize: '15px',
            textAlign: 'left',
            margin: '0 auto',
            width: '300px',
            color: 'red',
            visibility: `${univercityValidation}`,
          }}
        >
          ???????????? ??????????????????!
        </div>
        <div>
          <LineAndDepartment setMajor={setMajor} />
        </div>
        <div
          style={{
            fontSize: '15px',
            textAlign: 'left',
            margin: '0 auto',
            width: '300px',
            color: 'red',
            visibility: `${majorValidation}`,
          }}
        >
          ????????? ????????? ??????????????????!
        </div>

        <div className="button-wrapper">
          <Button onClick={sign}>????????????</Button>
        </div>
      </SignupContainer>
      <Footer />
    </Container>
  );
};

export default Signup;
