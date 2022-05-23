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
  const searchChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <div style={{marginLeft:"180px"}}>
      <TextField
        className="inputRounded"
        placeholder={placeHolder}
        variant="outlined"
        size="small"
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            console.log(searchText);
            document.location.href = `/search?where=${searchText}`;
          }
        }}
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
     
    </div>
  );
};

export default Searchbar;
