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
    
    const keywordTag = {
      backgroundColor: 'lightGray',
      width: '50px',
      marginLeft: '5px',
      marginRight: '26px',
      color: 'black',
      marginTop: '13px',
      marginBottom:'13px',
      boxShadow:'1px 1px gray'
    };
    var count=5;
    return (
      <div style={{marginLeft: '80px', marginRight:"80px",display:"inline-flex"}}>
        <Card
          sx={{ maxWidth: 330 ,minWidth:330}}  
          onClick={clickForm}
        >
          <CardActionArea>
            <CardMedia component="img" height="140" image={dummy1} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <hr/>
                <Typography variant="body2" color="text.secondary" sx={{display:'inline'}}>
                  <Button style={keywordTag}>공대</Button>
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{display:'inline'}}>
                  <Button style={keywordTag}>공대</Button>
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{display:'inline'}}>
                  <Button style={keywordTag}>공대</Button>
                {
                  count>4 &&
                  <Button style={keywordTag}>
                    ...
                  </Button>
                 
                }
                </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
}

export default DocCard;