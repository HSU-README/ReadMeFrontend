import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  height: ${(props) => (props.isSelected ? '270px' : '250px')};
  width: ${(props) => (props.isSelected ? '240px' : '220px')};
  margin: 50px auto;

  border-radius: 10px;

  box-shadow: ${(props) => (props.isSelected ? '12px 12px 12px rgba(0, 0, 0, 0.5)' : 'none')};

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .card-content {
    padding: 10px;
    color: white;
    z-index: 1;
  }
  .card-head {
    padding-bottom:10px;
  }
  .card-title {
    font-weight:bold;
    padding-bottom: 10px;
  }
`;

export const OpacityBlack = styled.div`
  position: absolute;
  height: 30%;
  width: 100%;
  left: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(245, 139, 93, 0.5) 20%, #f57842 60%);
  border-radius: 0px 0px 10px 10px;
`;
