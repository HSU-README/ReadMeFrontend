import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Footer from 'components/footer';
import SelectCard from 'components/selectCard';
import Button from 'components/button';
import Header from 'components/header';
import NewGenerateSelectCard from 'components/newGenerateCard';
import BasicModal from 'components/basicModal/index.jsx';
import basicSelect from 'localData/basicSelect.json';

const datas = basicSelect.data;

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
      <div className="selectWrapper">
        <div className="section-select">
          <NewGenerateSelectCard />
          {datas.map((data, index) => (
            <SelectCard
              id={data.id}
              key={index}
              format={data}
              selectedFormat={selectedFormat}
              setSelectedFormat={setSelectedFormat}
              isSelected={index !== selectedFormat ? false : true}
            />
          ))}
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Select;
