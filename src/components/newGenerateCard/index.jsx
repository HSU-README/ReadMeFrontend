import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import newDocument from 'assets/images/newDocument.png';

export default function NewGenerateCard() {
  return (
    //TODO link url 변경 필요

    <Container>
      <Link to={`/generate`} style={{ textDecoration: 'none', color: 'black', width: '300px' }}>
        <div className="pofol-thumbnail-container">
          <img style={{ width: '70%' }} className="pofol-thumbnail" src={newDocument} alt="thumbnail"></img>
        </div>
        <hr style={{ margin: '0px' }}></hr>
        <div className="pofol-title">새 양식</div>
        <div className="top-info-container"></div>
      </Link>
    </Container>
  );
}
