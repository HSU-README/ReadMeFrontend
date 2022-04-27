import styled from 'styled-components';
import colors from 'styles/colors';
import { maxWidth } from 'styles/mixin';

export const Container = styled.div`
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
