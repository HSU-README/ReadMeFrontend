import React,{useState,useEffect} from 'react';
import { Input,TextField,Button,Stack,Alert,Error,Select,FormControl,MenuItem,InputLabel,ListSubheader} from '@mui/material';
import { ToastContainer, toast} from 'react-toastify';
import { ToastError, ToastSuccess } from '../../hooks/toastHook';
import logo from '../../assets/images/logo.jpg';
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';
import { API_ENDPOINT } from '../../apis/constant';
import { useNavigate } from 'react-router-dom';
import LineAndDepartment from './LineAndDepartment';
const Signup=()=>{
    const [name,setName]=useState("")
    const [id, setId]= useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] =useState("");
    const [email,setEmail]= useState("")
    const [university, setUniversity]= useState("");
    const [major,setMajor] =useState("")
    const [loginSuccess, setLoginSuccess]=useState(true);
    const navigate = useNavigate();
    const serverApi = axios.create({
      baseURL: `${API_ENDPOINT}`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const sign = async() => {
      console.log(name)
      console.log(password)
      console.log(email)
      await serverApi.post('/api/v1/members/new',{
        name:`${name}`,
        email:`${email}`,
        password:`${password}`,
        university:`${university}`,
        major:`${major}`,
      }).then(response=>{
        const successMessage = JSON.stringify(response.data.message);
        ToastSuccess(successMessage)
        navigate('/',
          {
            state:{isLoginSuccess:true}
          }
        )
      }).catch(err=>{
        const errorMessage = JSON.stringify(err.response.data.errorMessage);
        ToastError(errorMessage);
      })
    };


    return (
      <div style={{ position: 'relative', left: '35%', right: '35%' }}>
        <div
          style={{
            justifyContent: 'center',
            textAlign: 'center',
            border: '5px solid',
            marginTop: '100px',
            width: '700px',
            height: '750px',
            borderColor: '#F57842',
            borderRadius: '15px',
          }}
        >
          <ToastContainer />
          <img src={logo} alt="로고" style={{ width: '35%', height: '15%', marginTop: '35px', marginBottom: '40px' }} />
          <br />

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
            <LineAndDepartment setMajor={setMajor}/>
      
    </div>

          <br />
          <Button variant="outlined" size="small" onClick={sign} style={{ margin: '15px', width: '300px' }}>
            회원가입
          </Button>
        </div>
      </div>
    );
}

export default Signup;