import React,{useState,useEffect} from 'react';
import { Input,TextField,Button,Stack,Alert,Error} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import logo from '../../assets/images/logo.jpg';
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';

const Signup=()=>{
    const [id, setId]= useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] =useState("");
    const [email, setEmail]= useState("");
    const [loginSuccess, setLoginSuccess]=useState(true);
        
    const sign = () => {
     if(id==="" || password==="" || email==="" || nickname===""){
        toast.error("정보를 올바르게 입력해주세요",{
          autoClose:3000,
          position:toast.POSITION.TOP_RIGHT
        })
      }
      axios.post('https://hsureadme.herokuapp.com/api/v1/members/new',{
        name:id,
        password:password,
        email:id,
        nickname:nickname
      }).then(response=>{
        toast.success("정보를 올바르게 입력해주세요",{
          autoClose:3000,
          position:toast.POSITION.TOP_RIGHT
        })
        setId("")
        setPassword("")
        setEmail("")
        setNickname("")
      }).catch(err=>{
        toast.error("정보를 올바르게 입력해주세요",{
          autoClose:3000,
          position:toast.POSITION.TOP_RIGHT
        })
      })
    };


    return (
      <div style={{position:"relative" ,left:"35%", right:"35%"}}>
        <div
          style={{
            justifyContent: 'center',
            textAlign:'center',
            border: '5px solid',
            marginTop:"100px",
            width:"700px",
            height: '750px',
            borderColor: '#F57842',
            borderRadius: '15px',
          }}>
          <ToastContainer/>
          <img src={logo} alt="로고" style={{ width: '35%', height: '15%',marginTop:"35px", marginBottom:"40px" }} /><br/>
          <TextField
            placeholder="아이디"
            label="아이디"
            value={id}
            variant="outlined"
            size="small"
            style={{margin:"15px",width:"300px"}}
            onChange={(event) => {
              setId(event.target.value);
            }}
          />
          <br />
          <TextField
            placeholder="비밀번호"
            label="비밀번호"
            variant="outlined"
            value={password}
            size="small"
            style={{margin:"15px",width:"300px"}}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <br />
          <TextField
            placeholder='닉네임'
            label="닉네임"
            variant="outlined"
            value={nickname}
            size="small"
            style={{margin:"15px",width:"300px"}}
            onChange={(event) => {
              setNickname(event.target.value);
            }}
          />
          <br />
          <TextField
            placeholder="aaa@naver.com"
            label="학교 이메일(선택)"
            value={email}
            variant="outlined"
            size="small"
            style={{margin:"15px",width:"300px"}}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <br />
          <Button variant="outlined" size="small" onClick={sign} style={{margin:"15px",width:"300px"}}>
            회원가입
          </Button>
          
        </div>

      </div>
    );
}

export default Signup;