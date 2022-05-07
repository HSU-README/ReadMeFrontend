import React, { useCallback, useState, useEffect, useRef } from 'react';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import useInput from 'hooks/useInput';
import { Container, Button } from 'pages/myPage/userInfo/styles';
import { Link, useNavigate } from 'react-router-dom';
import { ToastError, ToastSuccess } from 'hooks/toastHook';
import { API_ENDPOINT } from 'apis/constant';
import { getUser, updateUser } from 'apis/userApi';
import { storage } from '../../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const UserInfo = () => {
  const [image, setImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  );
  const [file, setFile] = useState({});
  const fileInput = useRef(null);
  const [name, onChangeName, setName] = useInput('');
  const [university, onChangeUniversity, setUniversity] = useInput('');
  const [major, onChangeMajor, setMajor] = useInput('');
  const [interests, onChangeInterests, setInterests] = useInput('');
  const userId = JSON.parse(localStorage.getItem('readme_userInfo')).id;
  useEffect(() => {
    async function fetchUserData() {
      const data = await getUser(userId);
      setName(data.name);
      if (!data.profileUrl) {
        setImage('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png');
      } else {
        setImage(data.profileUrl);
      }
      setUniversity(data.university);
      setMajor(data.major);
      setInterests(data.interests);
    }
    fetchUserData();
  }, []);

  const onChangeImage = (e) => {
    setFile(e.target.files[0]);
    if (file) {
      setImage(file);
    } else {
      //업로드 취소할 시
      setImage('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png');
      return;
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    //create a refernce to the file tp be uploaded
    const storageRef = ref(storage, file.name);
    //upload the file
    const uploadTask = uploadBytesResumable(storageRef, file);
    getDownloadURL(uploadTask.snapshot.ref).then((url) => setImage(url));
    updateUser(userId, name, image, university, major, interests);
  });

  return (
    <Container>
      <Avatar
        src={image}
        style={{ margin: '20px', cursor: 'pointer' }}
        size={170}
        onClick={() => {
          fileInput.current.click();
        }}
      />
      <input
        type="file"
        style={{ display: 'none' }}
        accept="image/jpg,impge/png,image/jpeg"
        name="profile_img"
        onChange={onChangeImage}
        ref={fileInput}
      />
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
