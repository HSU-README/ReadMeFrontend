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
        <div className="section-title">디자인 미리보기</div>
        <hr />
        <div className="section-image">
          <Document file={docUrl} onLoadSuccess={onDocumentLoadSuccess}>
            <Page key={`page_${1}`} pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} />
          </Document>
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
                  #{data}
                </span>
              );
            })}
          </div>
          <hr />
        </div>

        <div className="button-wrapper">
          <Button style={{ width: '450px', height: '48px', borderRadius: '16px' }}>
            <span style={{ fontSize: '32px' }}>포트폴리오 만들기</span>
          </Button>
        </div>
      </div>
    </Container>
  );
}
