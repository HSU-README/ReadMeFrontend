
import React, { useEffect, useState,useCallback } from 'react';
import {Container} from '../select/styles';
import SelectCard from 'components/selectCard';
import { searchResult } from 'apis/portfolioApi';
import Header from '../home/header/Header.js';
import Slider from 'react-slick';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Footer from 'components/footer/index.jsx';
import NewGenerateSelectCard from 'components/newGenerateCard';
import basicSelect from 'localData/basicSelect.json';
import { FormGroup } from '@mui/material';
import './SearchPage.css';
;

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      src={require('../../assets/images/prevArrow.png')}
      alt="next"
      style={{ ...style, width: '15px', height: '15px' }}
      onClick={onClick}
    />
  );
};

const SampleNextArrow = (props) => {
  
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      src={require('../../assets/images/nextArrow.png')}
      alt="next"
      style={{ ...style, width: '15px', height: '15px' }}
      onClick={onClick}
    />
  );
};
const settings = {
  arrows: true,
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
var datas=[]
var datas1=[]
var title;
var result=[];
const SearchPage =()=>{
    const [userPortfolio, setUserPortfolio] = useState([{},{},{}]);

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
    useEffect(()=>{
      async function getSearhResult(){
        datas = await searchResult("전통 양식");
        datas1= await searchResult("전통 양식");
        result.push(datas)
        result.push(datas1)
      }
      getSearhResult();
    },[])
    
    const onReset = useCallback((e) => {
      e.preventDefault();
      setSelectedFormat('');
    }, []);
    return (
      <Container>
        <Header />
        <hr style={{ backgroundColor: '#F57842' }} />
        <div className="select-wrapper">
          <img className="arrow" src={require('../../assets/images/prevArrow.png')} />
          <div className="sectionSelect">
            {result === null ? (
              <div>nullsdasdasdasdasdsaasd</div>
            ) : (
              <>
                {
                  
                  // result.map((value, index) => {

                  //    return (
                  //        <SelectCard
                  //          id={value.id}
                  //          key={index}
                  //          format={value}
                  //          selectedFormat={selectedFormat}
                  //          setSelectedFormat={setSelectedFormat}
                  //          isSelected={index !== selectedFormat ? false : true}
                  //        />
                  //    );
                  // })}
                }
              </>
            )}
          </div>
          <img className="arrow" src={require('../../assets/images/nextArrow.png')} />
        </div>
        <Footer />
      </Container>
    );
}

export default SearchPage;