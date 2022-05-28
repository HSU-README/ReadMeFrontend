import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.background};

  .swiper {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: ${colors.background};
    height: calc((100% - 50px) / 2) !important;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid;
  border-color: ${colors.loginText};
  padding-bottom: 20px;
  max-width: 740px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 20px;
  padding: 12px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;
`;

export const Button = styled.button`
  margin-bottom: 12px;
  width: 60%;
  height: 45px;
  max-width: 540px;
  max-height: 80px;
  color: #fff;
  background-color: ${colors.loginButton};
  border: none;
  font-size: 30px;
  padding: 0 16px 0px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
`;
