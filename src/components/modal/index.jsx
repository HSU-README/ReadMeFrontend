import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import logo from 'assets/images/logo.jpg';
import { Button } from '../../pages/login/styles';
import { maxWidth } from 'styles/mixin';
import colors from 'styles/colors';
import { Link } from 'react-router-dom';

export default function Modal(props) {
  const [formImage, setFormImage] = useState('');
  const [name, setName] = useState('');
  const [tag, setTag] = useState(['']);

  const onClickExitButton = () => {
    setFormImage('');
    setName('');
    setTag('');
    props.closeDetailForm();
  };

  useEffect(() => {
    {
      props.dummyData.map((data, index) => {
        if (data.id == props.detailFormId) {
          setFormImage(data.img);
          setName(data.name);
          setTag(data.tag);
        }
      });
    }
  }, []);
  return (
    <Container>
      <div className="section-modal">
        <div
          className="exit-img"
          style={{
            backgroundImage: `url(${require('assets/images/exit.png')})`,
          }}
          onClick={() => {
            onClickExitButton();
          }}
        />
        <div className="section-title">디자인 미리보기</div>
        <hr />
        <div className="section-image">
          <FormImage img={formImage} />
        </div>

        <div className="section-info">
          <div className="name-info">
            <span className="info-title">디자이너</span> <span className="info-content">{name}</span>
          </div>
          <hr />
          <div className="tag-info">
            <span className="info-title" style={{ marginRight: '40px' }}>
              태그
            </span>
            {tag.map((data, index) => {
              return (
                <span className="info-content" key={index} style={{ padding: '0px 10px 0px 10px' }}>
                  #{data}
                </span>
              );
            })}
          </div>
          <hr />
        </div>

        <div className="button-wrapper">
          <Button style={{ width: '480px', height: '64px', borderRadius: '16px' }}>
            <span style={{ fontSize: '36px' }}>포트폴리오 만들기</span>
          </Button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  z-index: 100;
  justify-content: center;
  background-color: rgba(149, 165, 166, 0.9);

  .exit-img {
    width: 30px;
    height: 30px;
    float: right;
    position: relative;
    bottom: 30px;
    left: 100px;
    background-size: cover;
    background-position: center;
  }

  .section-modal {
    width: 960px;
    height: 900px;
    margin-top: 130px;
    background-color: rgba(245, 120, 66, 0.85);
    border-radius: 15px;
    padding: 50px 140px 50px 140px;
  }

  .section-image {
    display: flex;
    justify-content: center;
  }

  .section-title {
    font-size: 24px;
    font-weight: bold;
  }

  .section-info {
    font-size: 24px;
    font-weight: bold;
  }

  .info-title {
    margin-right: 10px;
  }

  .info-content {
    color: white;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    margin: 0px auto;
    padding: 60px 0px 40px 0px;
  }

  hr {
    height: 2px;
    margin: 4px 0px 8px 0px;
    background-color: #5e000d;
    border: 0px;
  }
`;

const FormImage = styled.div`
  background-image: url(${require('assets/images/dummy-select-image.jpeg')});
  background-size: cover;
  background-position: center;
  width: 640px;
  height: 530px;
  margin: 5px 0px 20px 0px;
`;
