import styled from 'styled-components';
import colors from 'styles/colors';
import { maxWidth } from 'styles/mixin';

export const Container = styled.div`
  ${maxWidth}
  min-width: 800px;
`;

export const SignupContainer = styled.div`
  border: 5px solid;
  border-color: ${colors.loginBorder};
  border-radius: 15px;
  max-width: 900px;
  width: 60%;
  margin: 100px auto 140px auto;
  box-shadow: 25% 0px 20px 10px rgba(0, 0, 0, 0.2);

  .logo-wrapper {
    text-align: center;
    padding: 30px 0px 40px 0px;
  }
  .logo {
    width: 20%;
    height: 20%;
    margin: 0px;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 0px auto;
    padding: 0px 50px 0px 50px;
  }

  .checkbox-wrapper {
    display: flex;
    justify-content: flex-start;
    max-width: 800px;
    margin: 0px auto;
    padding: 0px 50px 0px 50px;
    color: ${colors.loginText};
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    margin: 0px auto;
    padding: 30px 0px 20px 0px;
    max-width: 800px;
  }

  .login-find {
    text-align: center;
    margin-bottom: 100px;
  }
  .login-find-content {
    padding: 0px 15px;
    color: ${colors.loginText};
    font-size: 15px;
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
  height: 40px;
  max-width: 540px;
  max-height: 80px;
  color: #fff;
  background-color: ${colors.loginButton};
  border: none;
  font-size: 18px;
  padding: 0 16px 0px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
`;

export const Error = styled.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`;

export const Success = styled.div`
  color: #2eb67d;
  font-weight: bold;
`;
