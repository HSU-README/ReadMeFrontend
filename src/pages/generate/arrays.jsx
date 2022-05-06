const text = [
  {
    cmd: 'backColor',
    val: 'red',
    label: '배경 컬러',
  },
  {
    cmd: 'bold',
    label: 'Bold',
  },
  {
    cmd: 'delete',
    label: 'Del',
  },
  {
    cmd: 'fontSize',
    label: 'Size',
    val: '1-10',
  },
  {
    cmd: 'foreColor',
    label: '폰트 컬러',
    val: 'rgba(0,0,0,.5)',
  },
  {
    cmd: 'italic',
    label: '기울이기',
  },
  {
    cmd: 'selectAll',
    label: '전체 선택',
  },
  {
    cmd: 'underline',
    label: '밑줄',
  },

  {
    cmd: 'insertHorizontalRule',
    label: '가로줄',
  },

  {
    cmd: 'indent',
    label: '들여쓰기',
  },

  {
    cmd: 'strikeThrough',
    label: '취소선',
  },
];

const image = [
  {
    cmd: 'insertImage',
    label: 'IMG',
    val: 'https://unsplash.com/photos/8kqtv6dMNSg',
  },
];

const align = [
  {
    cmd: 'justifyCenter',
    label: '중앙 정렬',
  },
  {
    cmd: 'justifyLeft',
    label: '좌측 정렬',
  },
  {
    cmd: 'justifyRight',
    label: '우측 정렬',
  },

  {
    cmd: 'formatBlock',
    label: '블럭 영역',
    val: '<H1>',
  },
];

const emoji = [
  { 
    cmd: 'insertImage',
    val:'https://tigerlcw.github.io/CapStoneImg/hansung/%EC%83%81%EC%83%81%EB%B6%80%EA%B8%B0.png',
    label:'상상부기',
  },

  { 
    cmd: 'insertImage',
    val:'https://tigerlcw.github.io/CapStoneImg/hansung/%EC%83%81%EC%83%81%EB%B6%80%EA%B8%B02.png',
    label:'상상부기1',
  },

  { 
    cmd: 'insertImage',
    val:'https://tigerlcw.github.io/CapStoneImg/hansung/%EC%83%81%EC%83%81%EB%B6%80%EA%B8%B03.png',
    label:'상상부기2',
  },

  { 
    cmd: 'insertImage',
    val:'https://tigerlcw.github.io/CapStoneImg/hansung/%EC%83%81%EC%83%81%EB%B6%80%EA%B8%B04.png',
    label:'상상부기3',
  },

  { 
    cmd: 'insertImage',
    val:'https://tigerlcw.github.io/CapStoneImg/hansung/%EC%83%81%EC%83%81%EB%B6%80%EA%B8%B05.png',
    label:'상상부기4',
  },

  { 
    cmd: 'insertImage',
    val:'https://tigerlcw.github.io/CapStoneImg/hansung/%EC%83%81%EC%83%81%EB%B6%80%EA%B8%B06.png',
    label:'상상부기5',
  },

  { 
    cmd: 'insertImage',
    val:'https://tigerlcw.github.io/CapStoneImg/hansung/%EC%83%81%EC%83%81%EB%B6%80%EA%B8%B07.png',
    label:'상상부기6',
  },

  { 
    cmd: 'insertImage',
    val:'https://tigerlcw.github.io/CapStoneImg/hansung/%EC%83%81%EC%83%81%EB%B6%80%EA%B8%B08.png',
    label:'상상부기7',
  },

  { 
    cmd: 'insertImage',
    val:'https://tigerlcw.github.io/CapStoneImg/hansung/%EC%83%81%EC%83%81%EB%B6%80%EA%B8%B09.png',
    label:'상상부기8',
  },

  { 
    cmd: 'insertImage',
    val:'https://tigerlcw.github.io/CapStoneImg/hansung/%EC%83%81%EC%83%81%EB%B6%80%EA%B8%B010.png',
    label:'상상부기9',
  },

];

export { text, image, align, emoji };