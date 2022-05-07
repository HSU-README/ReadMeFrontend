import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCsH83X3xcp77f76bAImj5G-U6NsrKYlkk',
  authDomain: 'fir-readme-storage.firebaseapp.com',
  projectId: 'fir-readme-storage',
  storageBucket: 'fir-readme-storage.appspot.com',
  messagingSenderId: '856484842164',
  appId: '1:856484842164:web:df3e31895da9f0dea065e1',
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
