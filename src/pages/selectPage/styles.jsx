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
    margin-left: 100px;
    font-weight: bold;
    color: black;
    font-size: 35px;
  }

  .swiper {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background-color: ${colors.background};
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
`;
