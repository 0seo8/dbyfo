import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    onChange: (state) => {
      // eslint-disable-next-line no-unused-expressions
      state.value === true ? (state.value = false) : (state.value = true);
    },
    onRollup: (state) => {
      // eslint-disable-next-line no-unused-expressions
      state.value = true;
    },
    onRollDown: (state) => {
      // eslint-disable-next-line no-unused-expressions
      state.value = false;
    },
  },
});

export const { onRollup, onRollDown } = uiSlice.actions;

export default uiSlice.reducer;
