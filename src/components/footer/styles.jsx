import styled from 'styled-components';
import { maxWidth } from '../../styles/mixin';
import colors from '../../styles//colors';

export const Container = styled.footer`
  ${maxWidth}
  display: flex;
  justify-content: flex-end;
  padding: 6px;
  margin-top: auto;
  border-top: 1px solid;
  border-color: ${colors.footerLine};

  .copyright {
    font-size: 12px;
    margin-right: 40px;
  }
`;
