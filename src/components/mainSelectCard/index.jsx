import { color } from '@mui/system';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, OpacityBlack } from './styles';

export default function MainSelectCard() {
  const [userName, setUserName] = useState('');
  const [profileImg, setProfileImg] = useState('');
  const [updateDate, setUpdateDate] = useState('');
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [likeCnt, setLikeCnt] = useState(0);
  const [tags, setTags] = useState([]);
  return (
    //TODO link url 변경 필요
    <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
      <Container>
        <div className="top-info-container">
          <div>수정일자</div>
          <div className="user-info-container">
            <div>이름</div>
            <div className="profile-image-container">
              <img
                style={{ width: '30px', height: '30px', objectFit: 'contain', borderRadius: '50%' }}
                className="profile-image"
                src="https://firebasestorage.googleapis.com/v0/b/fir-readme-storage.appspot.com/o/2_%EC%BA%90%EB%A6%AD%ED%84%B0ai-1_3_-removebg-preview.png?alt=media&token=97250343-43dc-4fa1-ba21-d0f505d07e7e"
                alt="thumbnail"
              ></img>
            </div>
          </div>
        </div>

        <div className="pofol-title-container">
          <div className="pofol-title">제목</div>
        </div>

        <div className="pofol-thumbnail-container">
          <img
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            className="pofol-thumbnail"
            src="https://firebasestorage.googleapis.com/v0/b/fir-readme-storage.appspot.com/o/2_%EC%BA%90%EB%A6%AD%ED%84%B0ai-1_3_-removebg-preview.png?alt=media&token=97250343-43dc-4fa1-ba21-d0f505d07e7e"
            alt="thumbnail"
          ></img>
        </div>

        <div className="bottom-info-container">
          <div className="like-container">
            <img
              style={{ width: '30px', height: '30px' }}
              className="pofol-thumbnail"
              src={require('assets/images/thumbs_up_fill_icon.png')}
              alt="like"
            ></img>
            <div>6</div>
          </div>

          <div className="hashtag-container">
            <Link to={'/'}>
              <div>#해시태크</div>
            </Link>
            <div>#해시태크</div>
          </div>
        </div>
      </Container>
    </Link>
  );
}
