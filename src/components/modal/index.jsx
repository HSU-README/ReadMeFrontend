import React, { useState, useEffect } from 'react';
import { Button } from '../../pages/login/styles';
import { Container, FormImage } from './styles';
import { getPreview } from 'apis/previewApi';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Modal(props) {
  const [docUrl, setDocUrl] = useState('');
  const [title, setTitle] = useState('');
  const [designer, setDesigner] = useState('');
  const [tags, setTags] = useState([]);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    async function fetchPreviewData() {
      const data = await getPreview(props.previewId);
      setTitle(data.title);
      setDesigner(data.designer);
      setDocUrl(data.docUrl);
      setTags(data.tags);
    }
    fetchPreviewData();
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const onClickExitButton = () => {
    setTitle('');
    setDocUrl('');
    setDesigner('');
    setTags([]);
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
            <span className="info-content" style={{ padding: '0px 10px 0px 10px' }}>
              #IT
            </span>
            <span className="info-content" style={{ padding: '0px 10px 0px 10px' }}>
              #디자인
            </span>
            {/* {tags.map((data, index) => {
              return (
                <span className="info-content" key={index} style={{ padding: '0px 10px 0px 10px' }}>
                  #{data}
                </span>
              );
            })} */}
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
