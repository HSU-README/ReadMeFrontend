import React, { useCallback, useState } from 'react';
import axios from 'axios';
import useInput from 'hooks/useInput';
import { Container, Button } from 'pages/myPage/userInfo/styles';
import { Link, useNavigate } from 'react-router-dom';
import { ToastError, ToastSuccess } from 'hooks/toastHook';
import { API_ENDPOINT } from 'apis/constant';

const PickPofol = () => {
  const [currentMyPage, setCurrentMyPage] = useState('');
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
        console.log(JSON.stringify(response.data.result));
        const userInfo = JSON.stringify(response.data.result.id);
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

  return <Container>pickPofol</Container>;
};

export default PickPofol;
