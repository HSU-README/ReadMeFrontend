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
  try {
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};

// export const updateUser = async (userId, name, image, university, major, interests) => {
//   const response = await serverApi.put(`/api/v1/members/${userId}`, {
//     name: name,
//     profileUrl: image,
//     university: university,
//     major: major,
//     interests: interests,
//   });
//   try {
//     const successMessage = JSON.stringify(response.data.message);
//     ToastSuccess(successMessage);
//   } catch (error) {
//     const errorMessage = JSON.stringify(error.response.data.errorMessage);
//     ToastError(errorMessage);
//   }
// };
