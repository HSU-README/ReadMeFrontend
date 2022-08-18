import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from 'assets/images/logo.jpg';
import { Button, Link } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import Searchbar from './Searchbar.js';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  const [keywordBoxLeft, setkeyWordBoxLeft] = useState('0px');
  const [keywordBoxTop, setkeyWordBoxTop] = useState('0px');
  const navigate = useNavigate();
  //로그인 정보 state
  const { loginCheck } = useSelector((state) => state.loginCheck);
  //추천검색어 창 나타나게하는 리덕스 전역 관리 변수
  const { visibleCheck } = useSelector((state) => state.visibleCheck);
  const location = useLocation();
  const dispatch = useDispatch();
  const signIn = () => {
    dispatch({ type: 'signIn' });
  };
  const signOut = () => {
    dispatch({ type: 'signOut' });
  };
  const visible = () => {
    //추천검색어를 보이게
    dispatch({ type: 'visible' });
  };
  const keywordBoxLeftRight = {
    left: keywordBoxLeft,
    top: keywordBoxTop,
  };
  const keywordTag = {
    backgroundColor: '#E8E8E8',
    borderRadius: '30px',
    width: '100px',
    fontSize: '15px',
    fontWeight: '900',
    font: 'bold',
    marginLeft: '25px',
    color: 'black',
    marginTop: '13px',
    marginBottom: '13px',
  };

  var keywordBoxRef = useRef(null);

  useEffect(() => {
    //로그인&유저정보 state에 저장
    const readme_login = localStorage.getItem('readme_login');
    const readme_userInfo = localStorage.getItem('readme_userInfo');
    if (readme_login && readme_userInfo) {
      setIsLoggedIn(true);
      setUserInfo(readme_userInfo);
      signIn();
    }
  }, []);

  const dummeyKeywords = [
    '인문',
    '사회',
    '공학',
    '자연',
    '예술',
    '교육',
    '심플',
    '모던',
    '밝은',
    '어두운',
    '세련된',
    '고딕',
  ];

  return (
    <div className="headerMain">
      <div className="inner" style={{ marginBottom: '20px' }}>
        <NavLink to="/" className="logoNav">
          <img src={logo} className="logo" />
        </NavLink>
        <Searchbar />

        {/* 로그인시 출력 컴포넌트 */}
        {isLoggedIn ? (
          <span className="buttonFamily">
            <Button disabled style={{ color: '#000000', marginTop: '9%', fontSize: '18px' }}>
              {JSON.parse(userInfo).name}님&nbsp;&nbsp;|
            </Button>
            <Button
              style={{ color: '#000000', marginTop: '9%', fontSize: '18px' }}
              onClick={() => {
                signOut();
                setUserInfo(undefined);
                localStorage.clear();
              }}
            >
              <NavLink className="headerText" to="/login">
                로그아웃&nbsp;&nbsp;|
              </NavLink>
            </Button>
            <Button style={{ marginTop: '9%', fontSize: '18px' }}>
              <NavLink className="headerMypage" to="/mypage">
                마이페이지
              </NavLink>
            </Button>
          </span>
        ) : (
          //  로그아웃시 출력 컴포넌트
          <span className="buttonFamily">
            <Button style={{ marginTop: '9%', fontSize: '18px' }}>
              <NavLink className="headerText" to="/login">
                로그인&nbsp;&nbsp;|
              </NavLink>
            </Button>
            <Button style={{ marginTop: '9%', fontSize: '18px' }}>
              <NavLink className="headerText" to="/signup">
                회원가입
              </NavLink>
            </Button>
          </span>
        )}
      </div>

      {visibleCheck && (
        <div className="keywordBox" style={keywordBoxLeftRight}>
          <div style={{ display: 'inlineBlock' }}>
            {dummeyKeywords.map((data, index) => {
              return (
                <Button
                  key={index}
                  style={keywordTag}
                  onClick={() => {
                    document.location.href = `/search?searchtag=${data}`;
                  }}
                >
                  # {data}
                </Button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
