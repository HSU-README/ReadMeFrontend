import React, { useCallback, useState } from 'react';
import axios from 'axios';
import useInput from 'hooks/useInput';
import { Container, Button } from 'pages/myPage/userInfo/styles';
import { Link, useNavigate } from 'react-router-dom';
import { ToastError, ToastSuccess } from 'hooks/toastHook';
import { API_ENDPOINT } from 'apis/constant';

const UserInfo = () => {
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

  return (
    <Container>
      <div className="profile-image" />
      <div className="nickName">
        <input value={'닉네임'} style={{ width: '180px', fontWeight: 'bold' }} />
      </div>
      <div className="section-update">
        <div className="inputBorder university">
          <div>
            <span className="inputName">학교명 : </span>
            <input></input>
          </div>
          <div>
            <span className="inputName">전공 : </span>
            <input></input>
          </div>
        </div>
        <div className="inputBorder">
          <span className="inputName">관심분야 : </span>
          <input style={{ width: '350px', fontWeight: 'bold' }}></input>
        </div>
      </div>
      <div className="button-wrapper">
        <Button onClick={onSubmit}>정보 수정</Button>
      </div>
    </Container>
  );
};

export default UserInfo;
