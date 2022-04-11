const text = [
  {
    cmd: 'backColor',
    val: 'red',
    label: '배경 컬러',
  },
  {
    cmd: 'bold',
    label: '굵기',
  },
  {
    cmd: 'delete',
    label: '삭제',
  },
  {
    cmd: 'fontSize',
    label: '폰트 사이즈',
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
];

const image = [
  {
    cmd: 'insertImage',
    label: '이미지 추가',
    val: 'http://dummyimage.com/160x90',
  },
];

const align = [
  {
    cmd: 'justifyCenter',
    label: '중앙 정렬',
  },
  {
    cmd: 'justifyFull',
    label: '양쪽 정렬',
  },
  {
    cmd: 'justifyLeft',
    label: '좌측 정렬',
  },
  {
    cmd: 'justifyRight',
    label: '우측 정렬',
  },
];

export { text, image, align };
