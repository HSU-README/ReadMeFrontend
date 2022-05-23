import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import dummy1 from '../../assets/images/dummy4.png';
import {Card, CardActionArea, CardMedia,Dialog,DialogContent,DialogActions,DialogContentText,Button } from '@mui/material';
import Slider from 'react-slick';
import 'index.css';
const DocCard = (props) => {
  // const tags = props.pofolInfo.tag;
  const [openDialog, setOpenDialog] = useState(false);
  const clickForm = () => {
    console.log(props.openDetailForm)
    props.openDetailForm(props.id);
  };
  
  const handleOpen=()=>{
    setOpenDialog(true)
  }
  const handleClose=()=>{
    setOpenDialog(false);
  }
  return (
    <div
      style={{
        marginLeft: '50px',
        marginRight: '80px',
        display: 'inline-flex',
        border: '1px solid #d3d3d3',
        borderRadius: '15px',
      }}
    >
            {/* 로그인 안내창 */}
            <Dialog open={openDialog} onClose={handleClose}>
        <DialogContent>
          <DialogContentText style={{ fontSize: '20px', color: 'black' }}>
            로그인 후 이용 가능한 서비스입니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>돌아가기</Button>
          <Button
            onClick={() => {
              handleClose();
              document.location.href = 'http://localhost:3000/login';
            }}
          >
            로그인
          </Button>
        </DialogActions>
      </Dialog>
      <Card className="cardView" sx={{ maxWidth: 270, minWidth: 270 }}>
        <CardActionArea
          onClick={() => {
            if (props.isLogin === 'false') {
              handleOpen();
            }
          }}
        >
          <CardMedia
            className="cardMedia"
            component="img"
            height="190"
            image={dummy1}
            alt="green iguana"
            onClick={props.isLogin && clickForm}
          />
          <div style={{ marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>
            {props.pofolInfo.tag.map((data, index) => {
              return (
                <span
                  key={index}
                  onClick={() => {
                    alert(`${data}페이지로 이동`);
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
