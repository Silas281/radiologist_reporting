import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import reportReducer from './reducers/reportReducer';

const rootReducer = combineReducers({
  reports: reportReducer,
  
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
