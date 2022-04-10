import { useState, useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';
import fonts from '../../styles/fonts';
import { maxWidth } from '../../styles/mixin';

export default function SelectCard(props) {
  const setSelectedFormat = () => {
    props.getSelectedFormat(props.format.id);
  };

  return (
    //TODO link url 변경 필요
    <Container isSelected={props.isSelected} onClick={setSelectedFormat}>
      <OpacityBlack />
      <div className="card-content">
        <div className="card-head">{props.format.head}</div>
        <div className="card-title">{props.format.title}</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  background-image: url(${require('../../assets/images/dummy-select-image.jpeg')});
  background-size: cover;
  background-position: center;
  height: ${(props) => (props.isSelected ? '270px' : '250px')};
  width: ${(props) => (props.isSelected ? '240px' : '220px')};
  margin: 50px auto;

  border-radius: 10px;

  box-shadow: ${(props) => (props.isSelected ? '12px 12px 12px rgba(0, 0, 0, 0.5)' : 'none')};

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .card-content {
    padding: 10px;
    color: white;
    z-index: 1;
  }
  .card-head {
    ${fonts.Caption}
    padding-bottom:10px;
  }
  .card-title {
    ${fonts.Body1}
    font-weight:bold;
    padding-bottom: 10px;
  }
`;

const OpacityBlack = styled.div`
  position: absolute;
  height: 30%;
  width: 100%;
  left: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(245, 139, 93, 0.5) 20%, #f57842 60%);
  border-radius: 0px 0px 10px 10px;
`;
