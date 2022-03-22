import React from 'react'
import dummy1 from '../../assets/images/dummyBlack.jpg'
import { Card,CardActionArea, CardMedia, CardContent, Typography,Button,CardActions } from '@mui/material'
import Slider from 'react-slick';
import './index.css';
import styled from 'styled-components';
const DocCard =()=>{
    const dum=[
      {id:"1", tag:"공대"},
      {id:"2", tag:"디자인"},
      {id:"3", tag:"포트폴리오"},
    ]
    const formFont={
        fontSize:"20px",
        marginTop:"15px",
        marginBottom:"15px",
        marginLeft:"20px",
        fontWeight:"bold",
      }
    const clickForm=()=>{
        alert('아직 개발 x')
    }
  const CommunityTag = styled.div`
  background-color: ${(props) => props.bgColor};
  padding: 3px;
  font-weight: bold;
  border-radius: 4px;`
    return (
      <div style={{ marginLeft: '80px', marginRight: '80px', display: 'inline-flex', border:"3px solid lightgray" } }>
        <Card sx={{ maxWidth: 330, minWidth:330, zIndex:"8dp" }} onClick={clickForm}>
          <CardActionArea>
            <CardMedia component="img" height="140" image={dummy1} alt="green iguana" />
            <CardContent>
              {/*<Typography gutterBottom variant="h5" component="div">*/}
                Lizard
             <div className="community-tag-container">
              {dum.map((data,index) => (
                <CommunityTag bgColor="#eeeeee" id={data.id} style={{paddingRight:"20px",textAlign:"center"}}>{data.tag}</CommunityTag>
              ))}
                
  </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
}

export default DocCard;