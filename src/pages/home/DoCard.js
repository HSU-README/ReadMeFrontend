import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import dummy1 from '../../assets/images/dummy4.png';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';
import Slider from 'react-slick';
import 'index.css';
const DocCard = (props) => {
  // const tags = props.pofolInfo.tag;
  const clickForm = () => {
    props.openDetailForm(props.id);
  };
  const location = useLocation();

  var count = 5;
  return (
    <div style={{ marginLeft: '80px', marginRight: '80px', display: 'inline-flex' }}>
      <Card
        className="cardView"
        sx={{ maxWidth: 300, minWidth: 300 }}
        onClick={() => {
          console.log(location);
        }}
      >
        <CardActionArea>
          <CardMedia
            className="cardMedia"
            component="img"
            height="190"
            image={dummy1}
            alt="green iguana"
            onClick={props.isLogin === 'true' ? clickForm : undefined}
          />
          <div style={{ marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>
            {props.pofolInfo.tag.map((data, index) => {
              return (
                <span
                  className="grayTag"
                  key={index}
                  onClick={() => {
                    props.isLogin !== 'false' && alert(`${data}페이지로 이동`);
                  }}
                >
                  # {data}
                </span>
              );
            })}
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default DocCard;
