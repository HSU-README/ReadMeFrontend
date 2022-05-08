import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  max-width: 840px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 50px 50px 200px;

  input {
    border: none;
    border-top: 0px;
    border-right: 0px;
    border-bottom: 0px;
    border-left: 0px;
    font-size: 18px;
    text-align: center;
    :focus {
      outline: none;
    }
  }

  .profile-image {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    border: 3px solid ${colors.primary};
    background-image: url('../images/profile.jpg');
    background-size: cover;

    margin: 20px 30px;
  }

  .nickName {
    width: 180px;
    border-bottom: 1px solid;
    border-color: ${colors.gray};
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }

  .section-update {
  }

  .inputBorder {
    border: 2px solid;
    border-radius: 4px;
    border-color: ${colors.gray};
    padding: 5px 20px 5px 20px;
    margin: 30px 0px 30px 0px;
  }
  .university {
    display: flex;
  }

  .inputName {
    color: #a7a7a7;
    font-size: 24px;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    margin: 0px auto;
    padding: 30px 0px 20px 0px;
    max-width: 800px;
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
