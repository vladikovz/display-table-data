import { CharityFinancialActionTypes } from '../types';
import { CharityFinancial } from '../../interfaces/CharityFinancial';

export interface CharityFinancialAction {
  type: CharityFinancialActionTypes;
  payload?: any;
}

interface CharityFinancialStore {
  charityFinancials: CharityFinancial[];
}

const initialStore: CharityFinancialStore = {
  charityFinancials: [],
};

export const charityFinancialReducer = (store = initialStore, action: CharityFinancialAction) => {
  let charityFinancials = [...store.charityFinancials];
  switch (action.type) {
    case CharityFinancialActionTypes.ADD_ITEMS:
      charityFinancials = action.payload;
      return {
        ...store,
        charityFinancials,
      };
    default:
      return store;
  }
};
