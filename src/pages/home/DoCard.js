import React from 'react'
import dummy1 from '../../assets/images/dummyBlack.jpg'
import { Card,CardActionArea, CardMedia, CardContent, Typography,Button,CardActions } from '@mui/material'
import Slider from 'react-slick';

const DocCard =()=>{
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
  
    return (
      <div style={{marginLeft: '80px', marginRight:"80px",display:"inline-flex"}}>
        <Card
          sx={{ maxWidth: 330 }}  
          onClick={clickForm}
        >
          <CardActionArea>
            <CardMedia component="img" height="140" image={dummy1} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
}

export default DocCard;