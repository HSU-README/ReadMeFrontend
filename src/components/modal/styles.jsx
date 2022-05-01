import styled from 'styled-components';

export const Container = styled.div`
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

export const FormImage = styled.div`
  background-image: url(${require('assets/images/dummy-select-image.jpeg')});
  background-size: cover;
  background-position: center;
  width: 640px;
  height: 530px;
  margin: 5px 0px 20px 0px;
`;
