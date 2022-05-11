import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Footer from 'components/footer';
import SelectCard from 'components/selectCard';
import Button from 'components/button';
import Header from 'components/header';
import NewGenerateSelectCard from 'components/newGenerateCard';
import BasicModal from 'components/basicModal/index.jsx';

const formats = [
  {
    id: 0,
    title: '기본 양식1',
    thumbnail: '',
  },
  {
    id: 1,
    title: '기본 양식2',
    thumbnail: '',
  },
  {
    id: 2,
    title: '기본 양식3',
    thumbnail: '',
  },
  {
    id: 3,
    title: '기본 양식4',
    thumbnail: '',
  },
  {
    id: 4,
    title: '기본 양식5',
    thumbnail: '',
  },
];

const Select = () => {
  const [selectedFormat, setSelectedFormat] = useState('');
  const [showDetailForm, setShowDetailForm] = useState(false);
  const [detailFormId, setDetailFormId] = useState('');

  const openDetailForm = (id) => {
    setShowDetailForm(true);
    setDetailFormId(id);
  };

  const closeDetailForm = () => {
    setShowDetailForm(false);
    setDetailFormId('');
    setSelectedFormat('');
  };

  const onReset = useCallback((e) => {
    e.preventDefault();
    setSelectedFormat('');
  }, []);

  return (
    <Container>
      {selectedFormat !== '' ? (
        <BasicModal detailFormId={detailFormId} previewId={selectedFormat} closeDetailForm={closeDetailForm} />
      ) : (
        <></>
      )}
      <Header />
      <div>{selectedFormat}</div>
      <div className="selectWrapper">
        <div className="section-select">
          <NewGenerateSelectCard />
          {formats.map((format, index) => (
            <SelectCard
              id={index}
              key={index}
              format={format}
              selectedFormat={selectedFormat}
              setSelectedFormat={setSelectedFormat}
              isSelected={index !== selectedFormat ? false : true}
            />
          ))}
        </div>
      </div>
      {/* <div className="buttonWrapper">
        <div className="section-button">
          <div onClick={onReset}>
            <Button size="large">취소</Button>
          </div>
          <div>
            <Link to={`/generate/${selectedFormat}`}>
              <Button size="large">만들기</Button>
            </Link>
          </div>
        </div>
      </div> */}
      <Footer />
    </Container>
  );
};

export default Select;
