import { atom } from 'recoil';

export const chartState = atom({
  key: 'chartState',
  default: new Array(36).fill(''),
});
