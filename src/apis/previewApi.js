import axios from 'axios';
import { ToastError, ToastSuccess } from 'hooks/toastHook';

const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPreview = async (docId) => {
  const response = await serverApi.get(`/api/v1/doc/${docId}/preview`);
  console.log('response :', response);
  try {
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};
