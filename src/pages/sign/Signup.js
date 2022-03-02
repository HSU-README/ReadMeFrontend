import React,{useState} from 'react';
import './Signup.css';
const app =express();
import { Input,TextField } from '@mui/material';
import logo from '../imgs/logo.png';
//import axios from axios;
const signup=()=>{
    alert('회원가입버튼입니다.');
}

const Signup=()=>{
    const [id, setId]= useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] =useState("");
    const [email, setEmail]= useState("");
    const textFieldStyle={
        margin:"8px"
    }
    const textChange=(text)=>{

    }
    return (
      <div style={{justifyContent:"center",alignItems:"center"}}>
        <div style={{ textAlign: "center" }}>
          <img
            src={logo}
            alt="로고"
            style={{ width: "200px", height: "80px" }}
          />
        </div>
          <div
            style={{
              justifyContent:"center",
              alignItems:"center",
              textAlign: "center",
              border: "5px solid",
              width: "700px",
              height:"50vh",
              borderColor: "#F57842",
              borderRadius: "15px",
            }}
          >
            <TextField
              label="아이디"
              value={id}
              variant="outlined"
              size="small"
              style={textFieldStyle}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
            <br />
            <TextField
              label="비밀번호"
              variant="outlined"
              value={password}
              size="small"
              style={textFieldStyle}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <br />
            <TextField
              label="닉네임"
              variant="outlined"
              value={nickname}
              size="small"
              style={textFieldStyle}
              onChange={(event) => {
                setNickname(event.target.value);
              }}
            />
            <br />
            <TextField
              label="학교 이메일(선택)"
              value={email}
              variant="outlined"
              size="small"
              style={textFieldStyle}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <br />
            <button className="SignupBtn" onClick={signup}>
              회원가입
            </button>
          </div>
      </div>
    );
}

export default Signup;