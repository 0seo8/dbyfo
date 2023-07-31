import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ui from './uiSlice';
import data from './dataSlice';

const store = configureStore({
  reducer: combineReducers({
    ui,
    data,
  }),
});

export const selectUiSlice = (state) => state.ui;
export const selectDataSlice = (state) => state.data;
export default store;
