import React, { useCallback, useState } from 'react';
import axios from 'axios';
import useInput from 'hooks/useInput';
import styled from 'styled-components';
import colors from 'styles/colors';
import { maxWidth } from 'styles/mixin';
import Logo from 'assets/images/logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Footer from 'components/footer';
import SelectCard from 'components/selectCard';
import Button from 'components/button';
import Header from 'components/header';

const formats = [
  {
    id: 0,
    head: 'Head Title',
    title: '새로운 양식0',
    thumbnail: '',
  },
  {
    id: 1,
    head: 'Head Title',
    title: '새로운 양식1',
    thumbnail: '',
  },
  {
    id: 2,
    head: 'Head Title',
    title: '새로운 양식2',
    thumbnail: '',
  },
  {
    id: 3,
    head: 'Head Title',
    title: '새로운 양식3',
    thumbnail: '',
  },
  {
    id: 4,
    head: 'Head Title',
    title: '새로운 양식4',
    thumbnail: '',
  },
  {
    id: 5,
    head: 'Head Title',
    title: '새로운 양5',
    thumbnail: '',
  },
];

const Select = () => {
  const [selectedFormat, setSelectedFormat] = useState('');

  const getSelectedFormat = (format) => {
    setSelectedFormat(format);
  };

  const onReset = useCallback((e) => {
    e.preventDefault();
    setSelectedFormat('');
    console.log('test');
  }, []);

  return (
    <Container>
      <Header />
      <div className="selectWrapper">
        <div className="section-select">
          {formats.map((format, index) => (
            <SelectCard
              key={index}
              format={format}
              selectedFormat={selectedFormat}
              getSelectedFormat={getSelectedFormat}
              isSelected={index !== selectedFormat ? false : true}
            />
          ))}
        </div>
      </div>
      <div className="buttonWrapper">
        <div className="section-button">
          <div onClick={onReset}>
            <Button size="xl">취소</Button>
          </div>
          <div>
            <Link to={`/design/${selectedFormat}`}>
              <Button size="xl">만들기</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Select;

const Container = styled.div`
  ${maxWidth}
  padding: "0px 24px 48px";

  a {
    flex: 1;
    margin: 0px 0px;
    padding: 0px 0px;
  }

  .section-select {
    display: flex;
    flex-wrap: wrap;
    width: 840px;
    height: 740px;
    justify-content: space-between;
    gap: 20px;
  }
  .section-button {
    display: flex;
    width: 400px;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 10px 150px 10px 0px;
    gap: 40px;
  }

  .selectWrapper {
    display: flex;
    flex-direction: row;
    margin: 0px auto;
    justify-content: center;
  }

  .buttonWrapper {
    display: flex;
    flex-direction: row;
    margin: 0px auto;
    justify-content: flex-end;
  }
`;
