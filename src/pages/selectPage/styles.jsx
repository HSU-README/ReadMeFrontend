import styled from 'styled-components';
import colors from 'styles/colors';
import { maxWidth } from 'styles/mixin';

export const Container = styled.div`
  ${maxWidth}
  background-color: ${colors.background};

  .sectionFont {
    display: flex;
    justify-content: flex-start;
    margin-top: 30px;
    margin-left: 200px;
    font-weight: bold;
    color: black;
    font-size: 40px;
  }

  .swiper {
    width: 95%;
    height: 85%;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    background-color: ${colors.background};
    height: calc((100% - 60px) / 2) !important;
  }
`;
