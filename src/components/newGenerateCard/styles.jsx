import styled from 'styled-components';
import colors from 'styles/colors';
export const Container = styled.div`
  position: relative;
  height: 450px;
  width: 300px;
  margin: 50px auto;
  border-radius: 10px;
  box-shadow: 3px 3px 6px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  top: ${(props) => (props.length === 1 ? '70px' : '0px')};

  .pofol-thumbnail-container {
    height: 70%;
    margin: 50px 0px 10px 0px;
  }

  .pofol-thumbnail {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .pofol-title {
    height: 10%;
    padding: 15px 20px 0px 20px;
    font-size: 20px;
    font-weight: bold;
    color: black;
    text-align: left;
  }
`;
