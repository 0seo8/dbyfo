import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: true,
  searchKeyward: '',
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
    setSearchValue: (state, action) => {
      state.searchKeyward = action.payload;
    },
  },
});

export const { onRollup, onRollDown, setSearchValue } = uiSlice.actions;

export default uiSlice.reducer;
