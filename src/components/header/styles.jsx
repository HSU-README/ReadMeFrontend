import styled from 'styled-components';
import { maxWidth } from '../../styles/mixin';
import colors from '../../styles/colors';

export const headerFont = {
  fontSize: '16px',
  color: '#646464',
  marginRight: '20px',
  cursor: 'pointer',
};

export const Container = styled.div`
  ${maxWidth}
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  gap: 20px;
  border-bottom: 1px solid;
  border-color: ${colors.footerLine};

  .copyright {
    font-size: 18px;
  }

  .logo {
    width: 85px;
    height: 36px;
    margin-left: 80px;
  }

  .section-login {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 280px;
  }

  p {
    margin: 0px 0px;
  }
`;
