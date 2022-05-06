import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from 'assets/images/logo.jpg';
import { Button } from '@mui/material';
import Searchbar from './Searchbar.js';
import { useSelector, useDispatch } from 'react-redux';
import Banner from './Banner.js';
import { Navigate } from 'react-router-dom';

const Header = () => {
  //로그인 정보 state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { loginCheck } = useSelector((state) => state.loginCheck);
  const [userInfo, setUserInfo] = useState('');

  const dispatch = useDispatch();
  const signIn = () => {
    dispatch({ type: 'signIn' });
  };
  const signOut = () => {
    dispatch({ type: 'signOut' });
  };

  useEffect(() => {
    console.log(loginCheck);
  }, loginCheck);
  const [keywordBoxLeft, setkeyWordBoxLeft] = useState('0px');
  const [keywordBoxTop, setkeyWordBoxTop] = useState('0px');
  const [keywordBoxVisible, setKeywordBoxVisible] = useState(false);
  const keywordBoxLeftRight = {
    left: keywordBoxLeft,
    top: keywordBoxTop,
  };
  const keywordTag = {
    backgroundColor: 'lightGray',
    width: '100px',
    marginLeft: '35px',
    marginRight: '35px',
    color: 'black',
    marginTop: '13px',
    marginBottom: '13px',
    boxShadow: '1px 1px gray',
  };

  var keywordBoxRef = useRef(null);
  useEffect(
    () => {},
    window.addEventListener('resize', () => {
      setkeyWordBoxLeft(`${keywordBoxRef.current.getBoundingClientRect().x}px`);
      setkeyWordBoxTop(`${keywordBoxRef.current.getBoundingClientRect().y + 42}px`);
    }),
  );

  useEffect(() => {
    //로그인&유저정보 state에 저장
    const readme_login = localStorage.getItem('readme_login');
    const readme_userInfo = localStorage.getItem('readme_userInfo');
    if (readme_login && readme_userInfo) {
      setIsLoggedIn(true);
      setUserInfo(readme_userInfo);
      signIn();
    }
    setkeyWordBoxLeft(`${keywordBoxRef.current.getBoundingClientRect().x}px`);
    setkeyWordBoxTop(`${keywordBoxRef.current.getBoundingClientRect().y + 42}px`);
  }, []);
  const dummeyKeywords = ['컴공', '디자인', '컴공', '디자인', '컴공', '디자인', '컴공', '디자인'];

  return (
    <div className="headerMain">
      <div className="inner" style={{ marginBottom: '40px' }}>
        <img
          src={logo}
          className="logo"
          onClick={() => {
            window.location.href = '';
          }}
        />
        <span className="inner" id="inner">
          <div
            style={{ display: 'relative', marginLeft: '30px', paddingTop: '10px' }}
            ref={keywordBoxRef}
            onMouseOver={() => {
              setKeywordBoxVisible(true);
            }}
          >
            <Searchbar />
          </div>
        </span>

        {/* 로그인시 출력 컴포넌트 */}
        {isLoggedIn ? (
          <>
            <Button disabled style={{ color: '#1976d2', marginTop: '43px', fontSize: '23px' }}>
              {userInfo}님
            </Button>
            <Button
              href="/login"
              style={{ marginTop: '43px', fontSize: '23px' }}
              onClick={() => {
                setIsLoggedIn(false);
                setUserInfo(undefined);
                localStorage.clear();
              }}
            >
              로그아웃
            </Button>
            <Button href="/" style={{ marginTop: '43px', fontSize: '23px' }}>
              마이페이지
            </Button>
          </>
        ) : (
          //  로그아웃시 출력 컴포넌트
          <span>
            <Button href="/login" style={{ marginTop: '43px', fontSize: '23px' }}>
              로그인
            </Button>
            <Button href="/signup" style={{ marginTop: '43px', fontSize: '23px' }}>
              회원가입
            </Button>
          </span>
        )}
      </div>

      {keywordBoxVisible && (
        <div className="keywordBox" style={keywordBoxLeftRight}>
          <div
            style={{
              textAlign: 'left',
              border: '1px solit gray',
              marginLeft: '10px',
              marginTop: '10px',
              textAlign: 'left',
              paddingLeft: '25px',
            }}
          >
            추천 키워드
          </div>
          <hr style={{ backgroundColor: 'black' }} />
          <div style={{ display: 'inlineBlock' }}>
            {dummeyKeywords.map((data, index) => {
              return (
                <Button key={index} style={keywordTag}>
                  {data}
                </Button>
              );
            })}
          </div>
        </div>
      )}
      <div style={{ position: 'relative' }}>
        <Banner setKeywordBoxVisible={setKeywordBoxVisible} />
      </div>
    </div>
  );
};

export default Header;
