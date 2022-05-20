import { atom } from 'recoil';

export const chartState = atom({
  key: 'chartState',
  default: new Array(36).fill(''),
});

export const tagsState = atom({
  key: 'tagsState',
  default: '',
});
