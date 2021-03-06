import axios from 'axios';
import { ToastError, ToastSuccess } from 'hooks/toastHook';
import basicSelect from 'localData/basicSelect.json';
const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

//유저의 문서들 불러오기
export const getUserPortfolio = async (userId) => {
  const response = await serverApi.get(`/api/v1/member/${userId}/docs`);
  try {
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};

//문서 정보 가져오기
export const getPortfolio = async (docId) => {
  if (docId == 1001) {
    return basicSelect.data[0].result;
  } else if (docId == 1002) {
    return basicSelect.data[1].result;
  } else if (docId == 1003) {
    return basicSelect.data[2].result;
  } else if (docId == 1004) {
    return basicSelect.data[3].result;
  } else if (docId == 1005) {
    return basicSelect.data[4].result;
  } else {
    console.log(docId);
    const response = await serverApi.get(`/api/v1/doc/${docId}`);
    console.log(response);
    try {
      console.log('response', response.data.result);
      return response.data.result;
    } catch (error) {
      console.log(error);
    }
  }
};

//전체 문서 불러오기
export const getAllPortfolio = async () => {
  const response = await serverApi.get(`/api/v1/home/docs/all`);
  console.log(response);
  try {
    console.log('response', response.data.result);
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};

//인기 문서 불러오기
export const getMostLikePortfolio = async () => {
  const response = await serverApi.get(`/api/v1/home/docs/mostLike`);
  console.log(response);
  try {
    console.log('response', response.data.result);
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};

//학과별 문서 불러오기
export const getMajorPortfolio = async (memberId) => {
  const response = await serverApi.get(`/api/v1/home/docs/major`, { params: { memberId: memberId } });
  console.log(response);
  try {
    console.log('response', response.data.result);
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};

//문서 검색
export const getSearchPortfolio = async (searchText) => {
  console.log(searchText);
  if (searchText === '전통 양식') {
    return basicSelect.data[0].result;
  } else if (searchText === '픽토그램 양식') {
    return basicSelect.data[1].result;
  } else if (searchText === '기본 양식') {
    return basicSelect.data[2].result;
  } else {
    const response = await serverApi.get(`/api/v1/doc/search?where=${searchText}`);

    try {
      return response.data.result;
    } catch (error) {
      console.log(error);
    }
  }
};

//문서 만들기
export const createPortfolio = async (memberId, title, components, tags, visibleCheck, docUrl) => {
  const componentArray = new Array();
  await components.map((component, index) => {
    console.log(component);
    switch (component.type) {
      case 'TEXT':
        console.log('text: ' + component.dimension.width);
        componentArray.push({
          type: 'text',
          x: component.position.left,
          y: component.position.top,
          width: component.dimension.width.replace('px', ''),
          height: component.dimension.height.replace('px', ''),
          textContent: component.content,
        });
        break;

      case 'CHART':
        const stringToObject = () => {
          const arr = component.chartContent.split(',');
          const content = new Array(0);
          for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
              content.push({ row: i, column: j, content: arr[i * 6 + j] });
            }
          }
          return content;
        };

        componentArray.push({
          type: 'table',
          x: component.position.left,
          y: component.position.top,
          width: component.dimension.width.replace('px', ''),
          height: component.dimension.height.replace('px', ''),
          tableContents: stringToObject(),
          tableCol: component.chart.col,
          tableRow: component.chart.row,
        });
        break;

      case 'IMAGE':
        componentArray.push({
          type: 'image',
          x: component.position.left,
          y: component.position.top,
          width: component.dimension.width.replace('px', ''),
          height: component.dimension.height.replace('px', ''),
          imgUrl: component.content,
        });
        break;

      case 'IMOGE':
        componentArray.push({
          type: 'icon',
          x: component.position.left,
          y: component.position.top,
          width: component.dimension.width.replace('px', ''),
          height: component.dimension.height.replace('px', ''),
          iconUrl: component.content,
        });
        break;
      default:
        break;
    }
  });

  const response = await serverApi
    .post(`/api/v1/doc/edit`, {
      memberId: memberId,
      components: componentArray,
      title: title,
      docUrl: docUrl,
      tags: tags,
      visibility: visibleCheck === true ? 'public' : 'private',
      major: JSON.parse(localStorage.getItem('readme_userInfo')).major,
    })
    .catch(console.log(memberId));
  try {
    console.log('tags:', tags);
    console.log(response.data.tags);
    const successMessage = JSON.stringify(response.data.message);
    const docId = JSON.stringify(response.data.result.docId);
    console.log(JSON.stringify(response.data.result));
    ToastSuccess(successMessage + `  문서번호: ${docId}`);
    return docId;
  } catch (error) {
    const errorMessage = JSON.stringify(error.response.data.errorMessage);
    ToastError(errorMessage);
  }
};

//문서 삭제
export const deletePortfolio = async (docId) => {
  const response = await serverApi
    .post(`/api/v1/doc/delete/${docId}`, {
      docId: docId,
    })
    .catch(console.log(docId));
  try {
    const successMessage = JSON.stringify(response.data.message);
    ToastSuccess(successMessage);
    return docId;
  } catch (error) {
    const errorMessage = JSON.stringify(error.response.data.errorMessage);
    ToastError(errorMessage);
  }
};
