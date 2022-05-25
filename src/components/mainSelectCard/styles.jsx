import styled from 'styled-components';

export const Container = styled.div`
  height: 270px;
  width: 270px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.5);

  .top-info-container {
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .user-info-container {
    display: flex;
  }

  .pofol-title-container {
    height: 20%;
  }

  .profile-image-container {
    width: 30px;
  }

  .pofol-thumbnail-container {
    height: 40%;
    margin: 10px 0px 10px 0px;
  }

  .bottom-info-container {
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .like-container {
    display: flex;
  }
  .hashtag-container {
    display: flex;
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
