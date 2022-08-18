import styled from 'styled-components';
import { maxWidth } from '../../styles/mixin';
import colors from '../../styles/colors';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;

  .copyright {
    flex: 1;
    font-size: 32px;
    color: white;
    text-align: center;
    line-height: 100px;
    background-color: #f24444;
    font-weight: 700;
  }
`;
