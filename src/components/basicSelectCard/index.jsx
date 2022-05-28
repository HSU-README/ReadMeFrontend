import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function BasicSelectCard({ data, length }) {
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

    setDocDate(`${year}년 ${month}월 ${day}일`);
    setTitle(data.title);
    setThumbnail(data.docUrl);
    setLikeCnt(data.likeCnt);
    setTags(data.tags);
  }, []);

  return (
    //TODO link url 변경 필요
    <>
      <Container length={length}>
        <Link to={`/preview/${docId}`} style={{ textDecoration: 'none', color: 'black', width: '300px' }}>
          <div className="pofol-thumbnail-container">
            <img
              style={{ width: '100%', height: '100%' }}
              className="pofol-thumbnail"
              src={thumbnail}
              alt="thumbnail"
            ></img>
          </div>
          <hr style={{ margin: '0px' }}></hr>
          <div className="pofol-title">{title}</div>
          <div className="top-info-container">
            <div className="hashtag-container">
              {tags.map((data, index) => {
                return (
                  <Link
                    to={`/search?searchtag=${data.name.slice(1)}`}
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <div style={{ color: 'gray', marginRight: '5px', fontSize: '14px' }} key={index}>
                      {data.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Link>
      </Container>
    </>
  );
}
