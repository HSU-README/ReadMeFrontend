import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import dummy1 from '../../assets/images/dummyBlack.jpg';
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
    <div style={{ marginLeft: '80px', marginRight: '80px', display: 'inline-flex' }} >
      <Card sx={{ maxWidth: 330 ,minWidth:300 }} onClick={()=>{
        console.log(location)
      }}>
        <CardActionArea >
          <CardMedia component="img" height="140" image={dummy1} alt="green iguana" onClick={clickForm} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" onClick={clickForm}>
              Lizard  
            </Typography>
              {
                props.pofolInfo.tag.map((data,index)=>{
                  return <span className="grayTag" key={index} onClick={()=>{alert(`${data}페이지로 이동`)}}>#{data}</span>
                })
              }
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default DocCard;
