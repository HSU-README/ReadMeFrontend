import React,{useState} from 'react';
import './Header.css';
import logo from '../assets/images/logo.jpg';
import {InputAdornment,Stack, Button} from '@mui/material';
import {TextField} from '@material-ui/core'
import Search from '@mui/icons-material/Search';
import { borderRadius } from '@mui/system';
import { MenuItem } from '@mui/material';
const Searchbar=()=>{
    const [searchText, setSearchText]=useState("")
    const searchChange=(event)=>{
        setSearchText(event.target.value)
    }
    return (
      <div>
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
          onClick={() => {
            
          }}
        />
        
        <br />
        <br />
      </div>
    );
}

export default Searchbar;