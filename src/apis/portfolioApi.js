import axios from 'axios';
import { ToastError, ToastSuccess } from 'hooks/toastHook';
import basicPortfolio1 from 'localData/basicPortfolio1.json';
import basicPortfolio2 from 'localData/basicPortfolio2.json';

const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

//유저의 문서들 불러오기
export const getUserPortfolio = async (userId) => {
  const response = await serverApi.get(`/api/v1/user/${userId}/docs`);
  try {
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};

//문서 정보 가져오기
export const getPortfolio = async (docId) => {
  if (docId == 1001) {
    return basicPortfolio1.result;
  } else if (docId == 1002) {
    return basicPortfolio2.result;
  } else {
    const response = await serverApi.get(`/api/v1/doc/${docId}`);
    try {
      return response.data.result;
    } catch (error) {
      console.log(error);
    }
  }
};

//문서 만들기
export const createPortfolio = async (memberId, title, components, docId) => {
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
        console.log('chart: ' + component.chartContent);
        componentArray.push({
          type: 'table',
          x: component.position.left,
          y: component.position.top,
          width: component.dimension.width.replace('px', ''),
          height: component.dimension.height.replace('px', ''),
          tableContent: component.chartContent,
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
    })
    .catch(console.log(memberId));
  try {
    const successMessage = JSON.stringify(response.data.message);
    console.log(JSON.stringify(response.data.result));
    ToastSuccess(successMessage);
  } catch (error) {
    const errorMessage = JSON.stringify(error.response.data.errorMessage);
    ToastError(errorMessage);
  }
};
