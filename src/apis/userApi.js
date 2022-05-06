import axios from 'axios';

const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const getUser = async (userId) => {
  const response = await serverApi.get(`/api/v1/members/${userId}`);
  try {
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
