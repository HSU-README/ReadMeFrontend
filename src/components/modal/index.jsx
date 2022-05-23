import React, { useState, useEffect } from 'react';
import { Button } from '../../pages/login/styles';
import { Container } from './styles';
import { getPreview } from 'apis/previewApi';
import { likePortfolio, unlikePortfolio, getUserLikePortfolio } from 'apis/likeApi';

export default function Modal(props) {
  const userId = JSON.parse(localStorage.getItem('readme_userInfo')).id;

  const [docUrl, setDocUrl] = useState('');
  const [title, setTitle] = useState('');
  const [designer, setDesigner] = useState('');
  const [tags, setTags] = useState([]);
  const [like, setLike] = useState(false);
  const [likeCnt, setLikeCnt] = useState(0);

  useEffect(() => {
    async function fetchPreviewData() {
      const previewData = await getPreview(props.previewId);
      const likeData = await getUserLikePortfolio(userId);
      setTitle(previewData.title);
      setDesigner(previewData.designer);
      setDocUrl(previewData.docUrl);
      setTags(previewData.tags);
      setLikeCnt(previewData.likeCnt);
      likeData.map((data) => {
        console.log(data.docId);
        if (data.docId == props.previewId) {
          setLike(true);
          console.log(data.docId);
        }
      });
    }
    fetchPreviewData();
  }, []);

  const onClickExitButton = () => {
    setTitle('');
    setDocUrl('');
    setDesigner('');
    setTags([]);
    setLikeCnt(0);
    setLikeCnt(false);
    props.closeDetailForm();
  };

  const goToGenerate = () => {
    window.location.href = `/generate/${props.previewId}`;
  };

  const goToPreview = () => {
    window.location.href = `/preview/${props.previewId}`;
  };

  return (
    <Container>
      <div className="section-modal">
        <div className="like-container">
          {like ? (
            <img
              alt="unlike"
              style={{ width: '38px', height: '38px' }}
              src={require('../../assets/images/likeon.png')}
              onClick={() => {
                setLike(false);
                setLikeCnt(like - 1);
                unlikePortfolio(userId, props.previewId);
              }}
            />
          ) : (
            <img
              alt="like"
              style={{ width: '38px', height: '38px' }}
              src={require('../../assets/images/likeoff.png')}
              onClick={() => {
                setLike(true);
                setLikeCnt(like + 1);
                likePortfolio(userId, props.previewId);
              }}
            />
          )}
          <div className="likeCnt-content">{likeCnt}</div>
        </div>
        <div
          className="exit-img"
          style={{
            backgroundImage: `url(${require('assets/images/exit.png')})`,
          }}
          onClick={() => {
            onClickExitButton();
          }}
        />
        <div className="section-title">{title}</div>
        <hr />
        <div className="section-image">
          <img src={docUrl} alt="preview"></img>
        </div>
        <div className="section-info">
          <div className="name-info">
            <span className="info-title">디자이너</span> <span className="info-content">{designer}</span>
          </div>
          <hr />
          <div className="tag-info">
            <span className="info-title" style={{ marginRight: '40px' }}>
              태그
            </span>
            {tags.map((data, index) => {
              return (
                <span className="info-content" key={index} style={{ padding: '0px 10px 0px 10px' }}>
                  {data.name}
                </span>
              );
            })}
          </div>
          <hr />
        </div>

        <div className="button-wrapper">
          <Button
            style={{ width: '450px', height: '48px', borderRadius: '16px', marginRight: '20px' }}
            onClick={() => {
              goToPreview();
            }}
          >
            <span style={{ fontSize: '17px', fontWeight: '700' }}>미리보기</span>
          </Button>

          <Button
            style={{ width: '450px', height: '48px', borderRadius: '16px' }}
            onClick={() => {
              goToGenerate();
            }}
          >
            <span style={{ fontSize: '17px', fontWeight: '700' }}>포트폴리오 만들기</span>
          </Button>
        </div>
      </div>
    </Container>
  );
}
