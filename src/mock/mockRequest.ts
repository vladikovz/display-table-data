import mockData from './mockData.json';
import { CharityFinancial } from '../interfaces/CharityFinancial';

export const mockRequest = () => {
  return new Promise<CharityFinancial[]>((resolve) => {
    setTimeout(() => {
      resolve(mockData as CharityFinancial[]);
    }, 300);
  });
};
