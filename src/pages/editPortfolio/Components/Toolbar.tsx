import React, { useEffect, useRef, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CanvasContext } from '../CanvasContainer';
import { NavLink } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import { TextField,RadioGroup,Radio,FormLabel } from '@mui/material';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { likePortfolio, unlikePortfolio, getUserLikePortfolio } from 'apis/likeApi';
import { storage } from '../../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { tagsState } from 'recoil/atoms';
import './Toolbar.css';
import plus_icon from '../../../assets/images/plus_icons.png';
import {
  FormControl,
  Input,
  Checkbox,
  FormControlLabel,
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
} from '@mui/material';
export const sizeList = [
  '8px',
  '9px',
  '10px',
  '11px',
  '12px',
  '14px',
  '16px',
  '18px',
  '20px',
  '24px',
  '28px',
  '32px',
  '36px',
  '40px',
  '44px',
  '48px',
  '52px',
  '56px',
  '60px',
  '64px',
  '68px',
  '72px',
];

export const fontList = [
  'Arial',
  'Arial Black',
  'Arial Unicode MS',
  'Calibri',
  'Cambria',
  'Cambria Math',
  'Candara',
  `Segoe UI, wf_segoe-ui_normal, helvetica, arial, sans-serif`,
  'Comic Sans MS',
  'Consolas',
  'Constantia',
  'Corbel',
  'Courier New',
  'Georgia',
  'Lucida Sans Unicode',
  'Tahoma',
  'Times New Roman',
  'Trebuchet MS',
  'Verdana',
];

interface IToolbarProps {
  isEditEnable: boolean;
  canvasBox: any;
  createPortfolio: any;
  userId: any;
  canvasData: any;
  docId: any;
  docTitle: any;
  isEditable: any;
  capture: any;
}

export default function Toolbar({
  isEditEnable,
  canvasBox,
  createPortfolio,
  userId,
  canvasData,
  docId,
  docTitle,
  isEditable,
  capture,
}: IToolbarProps) {
  const [title, setTitle] = useState(docTitle);
  const [tags, setTags] = useRecoilState(tagsState);
  const [tagsArray, setTagsArray] = useState([]);
  const { actions } = useContext(CanvasContext);
  const tagBoxRef = useRef<HTMLDivElement>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [visibleCheck, setVisibleCheck] = useState(true);
  const [imageName, setImageName] = useState('');
  const tumbsImageRef = useRef<HTMLImageElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const [like, setLike] = useState(false);
  const [tagText, setTagText] = useState("");
  const [changeImageCss, setChangeImageCss]= useState("beforeImage")
  const pageStyle = `{ size: 2.5in 4in }`;
  const addElement = (type: string) => {
    actions?.addElement(type);
  };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const handleOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
  const dataURLtoFile = (dataurl, fileName) => {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, { type: mime });
  };

  const captureToFirebase = async () => {
    const storageRef = ref(storage, imageName.name);
    //upload the file
    const uploadTask = await uploadBytesResumable(storageRef, imageName);
    const url = await getDownloadURL(uploadTask.ref);

    return url;
  };

  useEffect(() => {
    async function fetchUserLikePortfolioData() {
      const datas = await getUserLikePortfolio(userId);
      console.log(docId);
      await datas.map((data) => {
        if (data.docId == docId) {
          setLike(true);
        }
      });
    }
    fetchUserLikePortfolioData();
  }, []);

  useEffect(() => {
    setTitle(docTitle);
  }, [docTitle]);
  const [image, setImage] = useState(plus_icon);
  const onImageChange = (event) => {
    
    if (event.target.files && event.target.files[0]) {
      setChangeImageCss("afterImage");
      setImage(URL.createObjectURL(event.target.files[0]));
      setImageName(event.target.files[0]);
    }
  };
  



  const beforeImage = {
    textAlign: 'center',
    width: '100%',
    height: '200px',
    objectFit: 'contain',
    border: '1px solid black',
  };
  const afterImage = {
    textAlign: 'center',
    width: '100%',
    height: '200px',
    objectFit: 'fill',
    border: '1px solid black',
  };
  return (
    <div style={{ width: '250mm', textAlign: 'left', margin: 'auto', marginTop: '20px', marginBottom: '10px' }}>
      {isEditEnable && (
        <div id="toolbar">
          <select className="ql-font">
            {fontList.map((font) => (
              <option value={font}>{font}</option>
            ))}
          </select>
          <select className="ql-size">
            {sizeList.map((size) => (
              <option value={size}>{size}</option>
            ))}
          </select>
          <button className="ql-bold" />
          <button className="ql-italic" />
          <button className="ql-underline" />
          <select className="ql-align" />
          <select className="ql-color" />
          <select className="ql-background" />
          <button className="ql-script" value="sub"></button>
          <button className="ql-script" value="super"></button>
          <button className="ql-list" value="ordered"></button>
          <button className="ql-list" value="bullet"></button>
        </div>
      )}
      <span>
        {!isEditable ? (
          <img
            onClick={() => {
              console.log(title);
              handleOpen();
            }}
            src={require('../../../assets/images/import.png')}
            alt="저장"
            style={{ marginRight: '20px', width: '35px', height: '35px', cursor: 'pointer' }}
          />
        ) : (
          <img
            onClick={() => {
              handleOpen();
            }}
            src={require('../../../assets/images/saveIcon.png')}
            alt="저장"
            style={{ marginRight: '20px', width: '30px', height: '30px', cursor: 'pointer' }}
          />
        )}

        {!isEditable ? (
          <Dialog open={openDialog} onClose={handleClose} PaperProps={{ sx: { textAlign:"center",width: '15%', height: '10%',}}}>
            <DialogContent>
              <DialogContentText style={{color:"black",fontSize:"18px",fontWeight:"600" }}>문서를 불러오시겠습니까?</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button style={{backgroundColor:"black", color:"white",marginRight:"10px",fontWeight:"600" }} onClick={handleClose}>취소</Button>
              <Button style={{backgroundColor:"black", color:"white"}}>
                <NavLink to={`/generate/${docId}`} style={{ textDecoration: 'none',color:"white", marginLeft: '5px',fontWeight:"600" }}>
                  불러오기
                </NavLink>
              </Button>
            </DialogActions>
          </Dialog>
        ) : (
          <Dialog open={openDialog} onClose={handleClose} PaperProps={{ sx: { width: '30%', height: '52%' } }}>
            <DialogContent>
              <DialogContentText style={{ textAlign: 'center', fontSize: '30px', color: 'black' }}>
                {title}
                <FormControl style={{marginLeft:"68%"}}>
                  <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group"
                  onChange={(e)=>{
                    e.target.value==="true"?setVisibleCheck(true):setVisibleCheck(false)}}>
                    <FormControlLabel value="true" aria-label="A" control={<Radio size="small" />} label="공개" />
                    <FormControlLabel value="false" aria-label="A" control={<Radio size="small" />} label="비공개" />
                  </RadioGroup>
                </FormControl>
                <div style={{ textAlign: 'right', fontSize: '15px' }}>
                  수정 시간 : {new Date().getFullYear()}: {new Date().getMonth() + 1}: {new Date().getDate()}:{' '}
                  {new Date().getHours()}: {new Date().getMinutes()}
                </div>
              </DialogContentText>

              <input style={{position:'absolute',marginLeft:"200px",marginTop:"90px",opacity:"0"}} ref={imageRef} type="file" onChange={onImageChange} className="filetype" />
              <div style={{ width: '100%', height: '200px' }} >

              
                <img src={image} className={changeImageCss} onChange={()=>{setChangeImageCss("afterImage")}}/>
                
              </div>
              <div ref={tagBoxRef} style={{color:"#50bcdf",fontWeight:"600",marginTop:"10px"}}></div>
              <TextField
                id="outlined-basic"
                label="태그"
                value={tagText}
                variant="outlined"
                size="small"
                style={{ width: '100%', marginTop: '15px' }}
                onKeyPress={(e)=>{
                  console.log(e);
                  if(tagBoxRef.current.innerText.split("#").length<=4){
                    if(e.key==='Enter'){
                      tagBoxRef.current.innerHTML += `#${tagText} `
                      setTagText("")
                      setTagsArray(tagBoxRef.current.innerText.replace(/\#/g,"").split(" "));
                    }

                }else{
                  alert('태그는 4개까지 선택 가능합니다.')
                }
                }}
                onChange={(e) => {
                    setTagText(e.target.value);
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button

                style={{backgroundColor:"black", color:"white",marginRight:"10px"}}
                onClick={() => {
                  
                  handleClose();
                }}
              >
                취소
              </Button>
              <Link to="/" style={{textDecoration:"none"}}>
                <Button
                  style={{backgroundColor:"black", color:"white"}}
                  onClick={async () => {
                    handleClose();
                    let docUrl = await captureToFirebase();
                    createPortfolio(userId, title, canvasData,tagsArray, visibleCheck, docUrl);
                  }}
                >
                  확인
                </Button>
              </Link>
            </DialogActions>
          </Dialog>
        )}
      </span>
      <span>
        <ReactToPrint
          trigger={() => (
            <img
              src={require('../../../assets/images/exportPdf.png')}
              alt="출력"
              style={{ width: '30px', height: '30px', cursor: 'pointer' }}
            ></img>
          )}
          content={() => canvasBox.current}
        />
      </span>
      <FormControl variant="standard" style={{ marginLeft: '90px', width: '50%' }}>
        <Input
          value={title}
          placeholder="제목을 입력하세요."
          style={{ backgroundColor: 'white', borderRadius: '10px', padding: '4px', paddingLeft: '10px' }}
          onChange={(e) => {
            if(title.length<=13){
              setTitle(e.target.value);
            }else{
              alert('제목은 최대 13글자까지 입력 가능합니다.')
            }
          }}
        />
      </FormControl>
      {isEditable ? (
        <></>
      ) : like ? (
        <>
          <img
            alt="unlike"
            style={{ width: '30px', height: '30px', marginLeft: '70px' }}
            src={require('../../../assets/images/likeon.png')}
            ref={tumbsImageRef}
            onClick={() => {
              setLike(false);
              unlikePortfolio(userId, docId);
            }}
          />
        </>
      ) : (
        <>
          <img
            alt="like"
            style={{ width: '30px', height: '30px', marginLeft: '70px' }}
            src={require('../../../assets/images/likeoff.png')}
            ref={tumbsImageRef}
            onClick={() => {
              setLike(true);
              likePortfolio(userId, docId);
            }}
          />
        </>
      )}
    </div>
  );
}
