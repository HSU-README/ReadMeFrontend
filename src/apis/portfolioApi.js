import axios from 'axios';
import { ToastError, ToastSuccess } from 'hooks/toastHook';

const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPortfolio = async (docId) => {
  const response = await serverApi.get(`/api/v1/doc/${docId}`);
  try {
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};

export const createPortfolio = async (memberId, components) => {
  const componentArray = new Array();
  await components.map((component, index) => {
    switch (component.type) {
      case 'TEXT':
        componentArray.push({
          type: 'text',
          x: component.position.left,
          y: component.position.top,
          width: component.dimension.width,
          height: component.dimension.height,
          contents: component.content,
        });
        break;

      case 'CHART':
        componentArray.push({
          type: 'table',
          x: component.position.left,
          y: component.position.top,
          width: component.dimension.width,
          height: component.dimension.height,
          tableContents: component.chartContent,
          tableCol: component.chart.col,
          tableRow: component.chart.row,
        });
        break;

      case 'IMAGE':
        componentArray.push({
          type: 'image',
          x: component.position.left,
          y: component.position.top,
          width: component.dimension.width,
          height: component.dimension.height,
          imgUrl: component.content,
        });
        break;

      case 'IMOGE':
        componentArray.push({
          type: 'icon',
          x: component.position.left,
          y: component.position.top,
          width: component.dimension.width,
          height: component.dimension.height,
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