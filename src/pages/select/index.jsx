import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Footer from 'components/footer';
import SelectCard from 'components/selectCard';
import Button from 'components/button';
import Header from 'components/header';

const formats = [
  {
    id: 0,
    head: 'Head Title',
    title: '새로운 양식0',
    thumbnail: '',
  },
  {
    id: 1,
    head: 'Head Title',
    title: '새로운 양식1',
    thumbnail: '',
  },
  {
    id: 2,
    head: 'Head Title',
    title: '새로운 양식2',
    thumbnail: '',
  },
  {
    id: 3,
    head: 'Head Title',
    title: '새로운 양식3',
    thumbnail: '',
  },
  {
    id: 4,
    head: 'Head Title',
    title: '새로운 양식4',
    thumbnail: '',
  },
  {
    id: 5,
    head: 'Head Title',
    title: '새로운 양5',
    thumbnail: '',
  },
];

const Select = () => {
  const [selectedFormat, setSelectedFormat] = useState('');

  const getSelectedFormat = (format) => {
    setSelectedFormat(format);
  };

  const onReset = useCallback((e) => {
    e.preventDefault();
    setSelectedFormat('');
  }, []);

  return (
    <Container>
      <Header />
      <div className="selectWrapper">
        <div className="section-select">
          {formats.map((format, index) => (
            <SelectCard
              key={index}
              format={format}
              selectedFormat={selectedFormat}
              getSelectedFormat={getSelectedFormat}
              isSelected={index !== selectedFormat ? false : true}
            />
          ))}
        </div>
      </div>
      <div className="buttonWrapper">
        <div className="section-button">
          <div onClick={onReset}>
            <Button size="xl">취소</Button>
          </div>
          <div>
            <Link to={`/design/${selectedFormat}`}>
              <Button size="xl">만들기</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Select;
