import axios from 'axios';

const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUser = async (userId) => {
  const response = await serverApi.get(`/api/v1/members/${userId}`);
  try {
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (userId, image, name, university, major, interests) => {
  const response = await serverApi.put(`/api/v1/members/${userId}`, {
    name: name,
    profileUrl: image,
    university: university,
    major: major,
    interests: interests,
  });
  try {
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};
