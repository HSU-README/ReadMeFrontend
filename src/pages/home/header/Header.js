import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from 'assets/images/logo.jpg';
import { Button } from '@mui/material';
import Searchbar from './Searchbar.js';
import { useSelector, useDispatch } from 'react-redux';
import Banner from './Banner.js';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  const [keywordBoxLeft, setkeyWordBoxLeft] = useState('0px');
  const [keywordBoxTop, setkeyWordBoxTop] = useState('0px');
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
    fontSize: '14px',
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

    setkeyWordBoxLeft(`${keywordBoxRef.current.getBoundingClientRect().x + 100}px`);
    setkeyWordBoxTop(`${keywordBoxRef.current.getBoundingClientRect().y + 42}px`);

    //로그인이 되었는지 안되었는지 판단
    // if (location.state !== null) {
    //   if (location.state.isLoginSuccess === true) {
    //     signIn();
    //   }
    // } else {
    //   signOut();
    // }
  }, []);
  const dummeyKeywords = [
    '#컴퓨터공학',
    '#인공지능',
    '#기계공학',
    '#시각디자인',
    '#제품디자인',
    '#의학',
    '#법학',
    '#건축학',
    '#수학',
    '#경영학',
  ];

  return (
    <div className="headerMain">
      <div className="inner" style={{ marginBottom: '20px' }}>
        <img
          src={logo}
          className="logo"
          onClick={() => {
            window.location.href = '';
          }}
        />
        <span className="inner" id="inner">
          <div
            style={{ display: 'relative', marginLeft: '18px', paddingTop: '10px' }}
            ref={keywordBoxRef}
            onClick={() => {
              visible();
            }}
          >
            <Searchbar />
          </div>
        </span>

        {/* 로그인시 출력 컴포넌트 */}
        {isLoggedIn ? (
          <>
            <Button disabled style={{ color: '#1976d2', marginTop: '30px', fontSize: '23px' }}>
              {JSON.parse(userInfo).name}님
            </Button>
            <Button
              href="/login"
              style={{ marginTop: '30px', fontSize: '23px' }}
              onClick={() => {
                signOut();
                setUserInfo(undefined);
                localStorage.clear();
              }}
            >
              로그아웃
            </Button>
            <Button href="/mypage" style={{ marginTop: '30px', fontSize: '23px' }}>
              마이페이지
            </Button>
          </>
        ) : (
          //  로그아웃시 출력 컴포넌트
          <span>
            <Button href="/login" style={{ marginTop: '30px', fontSize: '23px' }}>
              로그인
            </Button>
            <Button href="/signup" style={{ marginTop: '30px', fontSize: '23px' }}>
              회원가입
            </Button>
          </span>
        )}
      </div>

      {visibleCheck && (
        <div className="keywordBox" style={keywordBoxLeftRight}>
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
      {/* <div>
        <Banner />
      </div> */}
    </div>
  );
};

export default Header;
