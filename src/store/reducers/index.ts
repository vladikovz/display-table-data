import { combineReducers } from 'redux';
import { charityFinancialReducer } from './charityFinancialReducer';

export const rootReducer = combineReducers({
  charityFinancial: charityFinancialReducer,
});

export type rootReducerType = ReturnType<typeof rootReducer>;
