import axios from 'axios';
import { ToastError, ToastSuccess } from 'hooks/toastHook';

const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

//좋아요 추가
export const likePortfolio = async (userId, docId) => {
  const response = await serverApi
    .post(`/api/v1/doc/${docId}/like`, {
      memberId: parseInt(userId),
    })
    .catch(console.log(docId));
  try {
    ToastSuccess('좋아요 추가!');
    return docId;
  } catch (error) {}
};

//좋아요 취소
export const unlikePortfolio = async (userId, docId) => {
  const response = await serverApi
    .post(`/api/v1/doc/${docId}/unlike`, {
      memberId: parseInt(userId),
    })
    .catch(console.log(docId));
  try {
    ToastSuccess('좋아요 취소!');
    return docId;
  } catch (error) {}
};

//유저가 좋아요한 문서들 불러오기
export const getUserLikePortfolio = async (userId) => {
  const response = await serverApi.get(`/api/v1/members/${userId}/docs/like`);
  try {
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};
