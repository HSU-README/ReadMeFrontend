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
    left: 120px;
    background-size: cover;
    background-position: center;
  }

  .section-modal {
    position: fixed;
    width: 35%;
    height: 85%;
    min-width: 650px;
    min-height: 750px;
    margin-top: 50px;
    background-color: rgba(245, 120, 66, 0.85);
    border-radius: 15px;
    padding: 50px 140px 50px 140px;
  }

  .react-pdf__Page__canvas {
    border-radius: 15px;
    box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    width: 80% !important;
    height: 100% !important;
  }

  .section-image {
    display: flex;
    justify-content: center;
    height: 400px;
  }

  .section-title {
    font-size: 24px;
    font-weight: bold;
    padding-left: 25px;
  }

  .section-info {
    font-size: 24px;
    font-weight: bold;
    margin-top: 45px;
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
    padding-top: 20px;
  }

  hr {
    height: 2px;
    margin: 4px 0px 20px 0px;
    background-color: #5e000d;
    border: 0px;
  }
`;

export const FormImage = styled.div`
  background-size: cover;
  background-position: center;
  width: 640px;
  height: 530px;
  margin: 5px 0px 20px 0px;
`;
