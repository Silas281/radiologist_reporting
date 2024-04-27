import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import reportReducer from './reducers/reportReducer';

const rootReducer = combineReducers({
  reports: reportReducer,
  // Add other reducers here if needed
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
