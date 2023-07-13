import { CharityFinancialActionTypes } from '../types';
import { CharityFinancial } from '../../interfaces/CharityFinancial';

export interface CharityFinancialAction {
  type: CharityFinancialActionTypes;
  payload?: any;
}

interface CharityFinancialStore {
  charityFinancials: CharityFinancial[];
  filteredCharityFinancials: CharityFinancial[];
  maxRevenueLength: number;
}

const initialStore: CharityFinancialStore = {
  charityFinancials: [],
  filteredCharityFinancials: [],
  maxRevenueLength: 0,
};

export const charityFinancialReducer = (store = initialStore, action: CharityFinancialAction) => {
  let charityFinancials = [...store.charityFinancials];
  let filteredCharityFinancials = [...store.filteredCharityFinancials];
  switch (action.type) {
    case CharityFinancialActionTypes.ADD_ITEMS:
      filteredCharityFinancials = action.payload;
      charityFinancials = action.payload;
      const maxRevenueLength = charityFinancials.reduce(
        (max, item) => (item.revenue > max ? item.revenue : max),
        0,
      );
      return {
        ...store,
        charityFinancials,
        filteredCharityFinancials,
        maxRevenueLength,
      };
    case CharityFinancialActionTypes.FILTERED_ITEMS:
      filteredCharityFinancials = store.charityFinancials.filter(
        (item) => item.revenue >= action.payload[0] && item.revenue <= action.payload[1],
      );
      return {
        ...store,
        filteredCharityFinancials,
      };
    default:
      return store;
  }
};
