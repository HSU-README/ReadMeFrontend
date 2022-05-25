import React,{useState,useEffect} from 'react';
import {Select,FormControl,MenuItem,InputLabel,ListSubheader} from '@mui/material';
const LineAndDepartment=({setMajor})=>{
    const lines=["인문", "사회","교육","자연","공학","예체능","의약"]
    const departments={
        0:["교양어&문학","국어","아시아어","유럽어&문학","독일어","러시아어","스페인어","언어학","영미어&문학","일본어","중국어","프랑스어","교약인문학","국제지역학","문헌정보학","문화,민속,미술사학","심리학","역사,고고학","종교학","철학,윤리학"],
        1:["경영학","경제학","관광학","광고,홍보학","교양경상학","금융,회계,세무학","무역,유통학","법학","가족,사회,복지학","교양사회과학","국제학","도시,지역학","사회학","언론,방송,매체학","정치외교학","행정학"],
        2:["교육학","유아교육학","공학교육","사회교육","언어교육","예체능교육","인문교육","자연계교육","초등교육학","특수교육학"],
        3:["농업학","산림,원예학","수산학","동물,수의학","생명과학","자원학","화학","화학","환경학","가정관리학","교양생활과학","식품영양학","의류,의상학","교양자연과학","물리,과학","수학","지구,지리학","천문,기상학","통계학"],
        4:["건축학","건축,설비공학","조경학","지상교통공학","항공학","해양공학","금속공학","기계공학","자동차공학","교양공학","기전공학","응용공학","산업공학","반도체,세라믹공학","섬유공학","신소재공학","재료공학","전기공학","전자공학","제어계계측공학","광학공학","에너지공학","응용소프트웨어공학","전산학,컴퓨터공학","정보,통신공학","도시공학","토목공학","화학공학"],
        5:["기타디자인","디자인일반","산업디자인","시각디자인","패션디자인","무용","체육","순수미술","응용미술","조형","연극,영화","국악","기악","기타음악","성악","음악학","작곡","공예","사진","만화","영상,예술"],
        6:["간호학","약학","의학","치의학","한의학","보건학","의료공학","재활학"],
    }
    const [lineIndex, setLineIndex] = useState(0);
    const [lineName,setLineName]= useState('')
    const [departmentName,setDepartmentName]= useState('')

    const ChooseLineAndDepartment=({name,lineLists,departmentLists})=>{
        return (
          <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
            <InputLabel htmlFor="grouped-select">{name}</InputLabel>
            {   lineLists?//계열과 전공별 데이터 구분
                <>
                <Select defaultValue="" value={lineName} label={name} onChange={(e)=>{setLineName(e.target.value)}}>
                {lineLists&& lineLists.map((data,index)=>{//랜더링 된 후 배열에 있는 값 리스트로 출력
                    return <MenuItem value={index} key={index} onClick={()=>{
                        setLineIndex(index)
                    }}>{data}</MenuItem>
                })}
                </Select>
                </>:<>
                <Select defaultValue="" value={departmentName} label={name} onChange={(e)=>{console.log(e.target.value);setDepartmentName(e.target.value)}}>
                {departmentLists&& departmentLists.map((data,index)=>{//랜더링 된 후 배열에 있는 값 리스트로 출력
                    return <MenuItem value={index} key={index} onClick={()=>{setMajor(data)}}>{data}</MenuItem>
                })}
                </Select>
                </>
            }
          </FormControl>
        );
      };
    
    return(
        <div>
            <ChooseLineAndDepartment name="계열" lineLists={lines} />
            <ChooseLineAndDepartment name="학과" departmentLists={departments[lineIndex]}/>
        </div>
    );
}

export default LineAndDepartment;