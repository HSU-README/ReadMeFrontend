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
  }
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
    val: "<blockquote>",
  },
];

const emoji = [
  { 
    cmd: 'insertImage',
    label: 'img',
    val: 'http://dummyimage.com/160x90',
  },
];

export { text, image, align, emoji };