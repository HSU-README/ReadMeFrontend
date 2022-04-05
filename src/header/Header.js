import React,{useState} from 'react';
import './Header.css';
import logo from '../assets/images/logo.jpg';
import {InputAdornment,Stack, Button} from '@mui/material';
import {TextField} from '@material-ui/core'
import Search from '@mui/icons-material/Search';
import { borderRadius } from '@mui/system';
const Header=()=>{
    const [searchText, setSearchText]=useState("")
    const searchChange=(event)=>{
        setSearchText(event.target.value)
    }
    const btnStyle={
      marginRight:"80px",
      display:"inline-flex"
    }
    const headerFont={
        fontSize:"18px",
        color:"#646464",
        marginTop:"15px",
        marginBottom:"20px"
    }
    const moveHome=()=>{
        window.location.href=""
    }
    return (
      <div className="headerMain" style={{display:"inline-flex"}}>
        <img src={logo} className="logo" onClick={moveHome}/>
        <TextField
          className="inputRounded"
          placeholder="Search"
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          value={searchText}
          onChange={searchChange}
        />
          <Button href="/login" style={headerFont}>
            로그인
          </Button>
          <Button href="/signup" style={headerFont}>
            회원가입
          </Button>
      </div>
    );
}

export default Header;