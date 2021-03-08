import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import stockReducer from './stockReducer';

const rootReducer = combineReducers({ filterReducer, stockReducer });

export default rootReducer;
