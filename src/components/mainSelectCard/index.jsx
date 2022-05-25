import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function MainSelectCard({ data }) {
  const [docId, setDocId] = useState(0);
  const [userName, setUserName] = useState('');
  const [profileImg, setProfileImg] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  );
  const [docDate, setDocDate] = useState('');
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [likeCnt, setLikeCnt] = useState(0);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const date = data.docDate;
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);
    setDocId(data.docId);
    setUserName(data.designer);
    if (data.designerUrl !== '') {
      setProfileImg(data.designerUrl);
    }
    console.log(date);
    setDocDate(`${year}년 ${month}월 ${day}일`);
    setTitle(data.title);
    setThumbnail(data.docUrl);
    setLikeCnt(data.likeCnt);
    setTags(data.tags);
  }, []);

  return (
    //TODO link url 변경 필요
    <Link to={`/preview/${docId}`} style={{ textDecoration: 'none', color: 'black' }}>
      <Container>
        <div className="top-info-container">
          <div>{docDate}</div>
          <div className="user-info-container">
            <div>{userName}</div>
            <div className="profile-image-container">
              <img
                style={{ width: '30px', height: '30px', objectFit: 'contain', borderRadius: '50%' }}
                className="profile-image"
                src={profileImg}
                alt="thumbnail"
              ></img>
            </div>
          </div>
        </div>

        <div className="pofol-title-container">
          <div className="pofol-title">{title}</div>
        </div>

        <div className="pofol-thumbnail-container">
          <img
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            className="pofol-thumbnail"
            src={thumbnail}
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
            <div>{likeCnt}</div>
          </div>

          <div className="hashtag-container">
            {tags.map((data, index) => {
              return (
                <Link to={`/search?searchtag=${data.name.slice(1)}`} style={{ textDecoration: 'none', color: 'black' }}>
                  <div key={index}>{data.name}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </Link>
  );
}
