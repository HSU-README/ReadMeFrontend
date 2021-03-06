import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deletePofolState, deletePofolDocIdState, openDialogState } from 'recoil/atoms';
import { useRecoilState } from 'recoil';
import { Container } from './styles';
import closeBtn from 'assets/images/close-button.png';

export default function DeleteSelectCard({ data, length }) {
  const [docId, setDocId] = useRecoilState(deletePofolDocIdState);
  const [userName, setUserName] = useState('');
  const [profileImg, setProfileImg] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  );
  const [docDate, setDocDate] = useState('');
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [likeCnt, setLikeCnt] = useState(0);
  const [tags, setTags] = useState([]);

  const [hide, setHide] = useState(true);
  const [deleteState, setDeleteState] = useRecoilState(deletePofolState);
  const [openDialog, setOpenDialog] = useRecoilState(openDialogState);

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
  }, [data]);

  return (
    //TODO link url 변경 필요
    <>
      <Container
        length={length}
        hide={hide}
        onMouseEnter={() => {
          setHide(false);
        }}
        onMouseLeave={() => {
          setHide(true);
        }}
      >
        {hide ? (
          <></>
        ) : (
          <img
            className="deleteImg"
            alt="delete"
            src={closeBtn}
            style={{
              width: '45px',
              height: '45px',

              position: 'absolute',
              left: '230px',
              top: '10px',
              float: 'right',
              zIndex: '999',
            }}
            onClick={async () => {
              await setDocId(data.docId);
              await setDeleteState(true);
              setOpenDialog(true);
            }}
          ></img>
        )}

        <Link to={`/preview/${docId}`} style={{ textDecoration: 'none', color: 'black', width: '300px' }}>
          <div className="pofol-thumbnail-container">
            <img
              style={{ width: '100%', height: '100%' }}
              className="pofol-thumbnail"
              src={thumbnail}
              alt="thumbnail"
            ></img>
          </div>
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
            <div className="docDate">{docDate}</div>
          </div>

          <hr style={{ margin: '0px auto', color: 'lightgrey' }} />
          <div className="bottom-info-container">
            <div className="user-info-container">
              <div className="profile-image-container">
                <img
                  style={{ width: '30px', height: '30px', objectFit: 'contain', borderRadius: '50%' }}
                  className="profile-image"
                  src={profileImg}
                  alt="thumbnail"
                ></img>
              </div>
              <div className="user-name">{userName}</div>
            </div>
            <div className="like-container">
              <img
                style={{ width: '20px', height: '20px' }}
                className="like-img"
                src={require('assets/images/heart.png')}
                alt="like"
              ></img>
              <div className="likeCnt">{likeCnt}</div>
            </div>
          </div>
        </Link>
      </Container>
    </>
  );
}
