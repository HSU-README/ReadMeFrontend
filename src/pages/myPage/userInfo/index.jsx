import React, { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import useInput from 'hooks/useInput';
import { Container, Button } from 'pages/myPage/userInfo/styles';
import { Link, useNavigate } from 'react-router-dom';
import { ToastError, ToastSuccess } from 'hooks/toastHook';
import { API_ENDPOINT } from 'apis/constant';
import { getUser } from 'apis/userApi';

const UserInfo = () => {
  const [user, setUser] = useState({});
  const [name, onChangeName] = useInput('');
  const [university, onChangeUniversity] = useInput('');
  const [major, onChangeMajor] = useInput('');
  const [interests, onChangeInterests] = useInput('');

  const userId = JSON.parse(localStorage.getItem('readme_userInfo')).id;
  useEffect(() => {
    async function fetchData() {
      const data = await getUser(userId);
    }
    fetchData();
  }, []);

  const serverApi = axios.create({
    baseURL: `${API_ENDPOINT}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const submit = async () => {
    await serverApi
      .put(`/api/v1/members/${1}`, {
        name: name,
        university: university,
        major: major,
        interests: interests,
      })
      .then((response) => {
        const userInfo = JSON.stringify(response.data.result);
        const successMessage = JSON.stringify(response.data.message);

        localStorage.setItem('readme_login', 'true');
        localStorage.setItem('readme_userInfo', userInfo);

        ToastSuccess(successMessage);
      })
      .catch((error) => {
        const errorMessage = JSON.stringify(error.response.data.errorMessage);
        ToastError(errorMessage);
      });
  };

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    submit();
  });

  return (
    <Container>
      <div className="profile-image" />
      <div className="nickName">
        <input value={name} onChange={onChangeName} style={{ width: '180px', fontWeight: 'bold' }} />
      </div>
      <div className="section-update">
        <div className="inputBorder university">
          <div>
            <span className="inputName">학교명 : </span>
            <input value={university} onChange={onChangeUniversity}></input>
          </div>
          <div>
            <span className="inputName">전공 : </span>
            <input value={major} onChange={onChangeMajor}></input>
          </div>
        </div>
        <div className="inputBorder">
          <span className="inputName">관심분야 : </span>
          <input value={interests} onChange={onChangeInterests} style={{ width: '350px', fontWeight: 'bold' }}></input>
        </div>
      </div>
      <div className="button-wrapper">
        <Button onClick={onSubmit}>정보 수정</Button>
      </div>
    </Container>
  );
};

export default UserInfo;
