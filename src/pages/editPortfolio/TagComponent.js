import React, { useState, useEffect } from 'react';
import 'pages/generate/style.css';
import { FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';
import { useRecoilState } from 'recoil';
import { tagsState } from 'recoil/atoms';

const tagArray = [];
const TagComponent = () => {
  const [tagsText, setTagsText] = useRecoilState(tagsState);
  const handleChange = (event) => {
    if (!tagArray.includes(event.target.value)) {
      if (tagArray.length >= 4) {
        alert('태그는 최대 4개까지 선택 가능합니다');
      } else {
        tagArray.push(event.target.value);
        setTagsText(tagsText + `#${event.target.value},`);
      }
    } else {
      let idx = tagArray.indexOf(event.target.value);
      if (idx === 0) {
        tagArray.shift();
      } else if (idx === 4) {
        tagArray.pop();
      } else {
        tagArray.splice(idx, 1);
      }
      setTagsText(
        tagArray.map((data) => {
          return `#${data}, `;
        }),
      );
    }
  };
  return (
    <div className="parent" style={{ marginLeft: '20%' }}>
      <div className="itemBoxCss">
        <details>
          <summary>연관키워드 (4개 선택 가능)</summary>
          <br />
          <details>
            <summary>전공</summary>
            <FormGroup sx={{ flexDirection: 'row' }} style={{ marginLeft: '26px' }}>
              <Button value="인문" onClick={handleChange}>
                #인문
              </Button>
              <Button value="사회" onClick={handleChange}>
                #사회
              </Button>
              <Button value="공학" onClick={handleChange}>
                #공학
              </Button>
              <Button value="자연" onClick={handleChange}>
                #자연
              </Button>
              <Button value="예술" onClick={handleChange}>
                #예술
              </Button>
              <Button value="교육" onClick={handleChange}>
                #교육
              </Button>
            </FormGroup>
          </details>
          <br />
          <details>
            <summary>디자인</summary>
            <FormGroup sx={{ flexDirection: 'row' }} style={{ marginLeft: '26px' }}>
              <Button value="심플" onClick={handleChange}>
                #심플
              </Button>
              <Button value="모던" onClick={handleChange}>
                #모던
              </Button>
              <Button value="밝은" onClick={handleChange}>
                #밝은
              </Button>
              <Button value="어두운" onClick={handleChange}>
                #어두운
              </Button>
              <Button value="세련된" onClick={handleChange}>
                #세련된
              </Button>
              <Button value="교육" onClick={handleChange}>
                #고딕
              </Button>
            </FormGroup>
          </details>
        </details>
        <div>{tagsText}</div>
      </div>
    </div>
  );
};

export default TagComponent;
