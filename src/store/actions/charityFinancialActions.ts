import { CharityFinancialActionTypes } from '../types';
import { CharityFinancialAction } from '../reducers/charityFinancialReducer';
import { CharityFinancial } from '../../interfaces/CharityFinancial';

export const addCharityFinancial = (payload: CharityFinancial[]): CharityFinancialAction => ({
  type: CharityFinancialActionTypes.ADD_ITEMS,
  payload,
});
