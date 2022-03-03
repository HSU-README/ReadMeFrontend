import React, { useCallback, useState } from 'react';
import axios, { AxiosError } from 'axios';
import useInput from 'hooks/useInput';
import styled from 'styled-components';
import colors from 'styles/colors';
import { maxWidth } from 'styles/mixin';
import Logo from 'assets/images/logo.jpg';
import { FormControlLabel, Checkbox } from '@mui/material';
import { Button, Error, Input } from 'pages/login/styles';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  return <div>메인페이지</div>;
};

export default Home;
