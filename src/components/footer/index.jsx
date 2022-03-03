import styled from 'styled-components';
import { maxWidth } from 'styles/mixin';
import colors from 'styles/colors';

export default function Footer() {
  return (
    <Container>
      <div className="copyright" style={{}}>
        copyright Team. Pro:Pofol
      </div>
    </Container>
  );
}

const Container = styled.footer`
  ${maxWidth}
  display: flex;
  justify-content: flex-end;
  padding: 15px;
  gap: 20px;
  border-top: 1px solid;
  border-color: ${colors.footerLine};

  .copyright {
    font-size: 18px;
  }
`;
