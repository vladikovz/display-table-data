import { Dispatch } from 'react';
import { addCharityFinancial } from '../store/actions/charityFinancialActions';
import { mockRequest } from '../mock/mockRequest';

export const getCharityFinancials = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const response = await mockRequest();
      dispatch(addCharityFinancial(response));
    } catch (e) {
      console.log(e);
    }
  };
};
