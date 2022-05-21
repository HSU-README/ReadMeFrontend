import React, { useState } from 'react';
import './Header.css';
import logo from 'assets/images/logo.jpg';
import { InputAdornment, Stack, Button ,Typography, AntSwitch,FormGroup,MaterialUISwitch,FormControlLabel,Switch,FormControl,FormLabel} from '@mui/material';
import { TextField } from '@material-ui/core';
import Search from '@mui/icons-material/Search';
import { borderRadius } from '@mui/system';
import { MenuItem } from '@mui/material';
const Searchbar = () => {
  const [searchText, setSearchText] = useState('');
  const [placeHolder, setPlaceHolder] = useState("제목을 입력해주세요.")
  const [chkSearch, setChkSearch] = useState(false);
  const searchChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <div>
      <TextField
        className="inputRounded"
        placeholder={placeHolder}
        variant="outlined"
        size="small"
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            alert(`${searchText}로 검색`);
            if(setChkSearch){
              document.location.href = `/search?title=${searchText}`;
            }else{
              document.location.href = `/search?tag=${searchText}`;
            }
            
          }
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
          endAdornment:(
            <span>
            <Switch
              onChange={(e) => {
                if (!e.target.checked) {
                  setPlaceHolder('제목을 입력해주세요.');
                  setChkSearch(e.target.checked)
                } else {
                  setPlaceHolder('태그를 입력해주세요.');
                  setChkSearch(e.target.checked)
                }
              }}
            ></Switch>
          </span>
          )
        }}
        value={searchText}
        onChange={searchChange}
      />
     
    </div>
  );
};

export default Searchbar;
