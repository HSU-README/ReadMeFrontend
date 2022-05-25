import React, { useState, useEffect,useRef } from 'react';
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
  const [nameValidation, setNameValidation] = useState("hidden");
  const [emailValidation, setEmailValidation] = useState("hidden");
  const [passwordValidation, setPasswordValidation] = useState("hidden");
  const [univercityValidation, setUniversityValidation] = useState("hidden");
  const [majorValidation, setMajorValidation] = useState("hidden");
  const serverApi = axios.create({
    baseURL: `${API_ENDPOINT}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const validation= ()=>{
    let chk=true;
    if(name===""){

      setNameValidation("")
      chk=false;
    }else{
      setEmailValidation("hidden")
    }
    if(email==="" || /\S+@\S+\.\S+/.test(email)===false){
      setEmailValidation("")
      chk=false;
    }else{
      setEmailValidation("hidden")
    }
    if(password===""){
      console.log("here")
      setPasswordValidation("")
      chk=false;
    }else{
      setPasswordValidation("hidden")
    }
    if(university===""){
      setUniversityValidation("")
      chk=false;
    }else{
      setUniversityValidation("hidden")
    }
    if(major===""){
      setMajorValidation("")
      chk=false;
    }else{
      setMajorValidation("hidden")
    }
    return chk;
  }
  const sign = async () => {
    console.log(name);
    console.log(password);
    console.log(email);
    const validationResult = validation();
    console.log(validationResult)
    if(validationResult){
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
          <img className="logo" style={{cursor:"default"}} src={Logo} alt="logo" />
        </div>

        <TextField
          placeholder="이름"
          label="이름"
          value={name}
          variant="outlined"
          size="small"
          style={{ margin: '8px', width: '300px' }}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <div style={{ fontSize:"15px",textAlign:"left",margin:"0 auto",width:'300px',color:"red",visibility:`${nameValidation}`}}>이름을 입력해주세요!</div>
        <TextField
          placeholder="aaa@naver.com"
          label="이메일"
          value={email}
          variant="outlined"
          size="small"
          style={{ margin: '8px', width: '300px' }}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <div style={{ fontSize:"15px",textAlign:"left",margin:"0 auto",width:'300px',color:"red",visibility:`${emailValidation}`}}>올바른 이메일을 입력해주세요!</div>

        <TextField
          placeholder="비밀번호"
          label="비밀번호"
          variant="outlined"
          value={password}
          size="small"
          type="password"
          style={{ margin: '8px', width: '300px' }}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div style={{ fontSize:"15px",textAlign:"left",margin:"0 auto",width:'300px',color:"red",visibility:`${passwordValidation}`}}>올바른 비밀번호를 입력해주세요!</div>
        <TextField
          placeholder="한성대학교"
          label="학교"
          value={university}
          variant="outlined"
          size="small"
          style={{ margin: '8px', width: '300px' }}
          onChange={(event) => {
            setUniversity(event.target.value);
          }}
        />
        <div style={{ fontSize:"15px",textAlign:"left",margin:"0 auto",width:'300px',color:"red",visibility:`${univercityValidation}`}}>대학교를 입력해주세요!</div>
        <div>
          <LineAndDepartment setMajor={setMajor} />
        </div>
        <div style={{ fontSize:"15px",textAlign:"left",margin:"0 auto",width:'300px',color:"red",visibility:`${majorValidation}`}}>전공과 계열을 선택해주세요!</div>

        <div className="button-wrapper">
          <Button onClick={sign}>회원가입</Button>
        </div>
      </SignupContainer>
      <Footer />
    </Container>
  );
};

export default Signup;
