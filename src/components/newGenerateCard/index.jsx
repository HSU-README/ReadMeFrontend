import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function NewGenerateCard() {
  return (
    //TODO link url 변경 필요

    <Container>
      <Link to={`/generate`} style={{ textDecoration: 'none', color: 'black', width: '300px' }}>
        <div className="pofol-thumbnail-container">
          <img style={{ width: '100%', height: '100%' }} className="pofol-thumbnail" src="" alt="thumbnail"></img>
        </div>
        <div className="pofol-title">새 양식</div>
        <div className="top-info-container"></div>
      </Link>
    </Container>
  );
}
