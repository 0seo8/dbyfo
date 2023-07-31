import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  value: false,
  searchKeyward: '',
  visibleIndexes: [],
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    onChange: (state) => {
      // eslint-disable-next-line no-unused-expressions
      state.value === true ? (state.value = false) : (state.value = true);
    },
    onRollup: (state, action) => {
      state.value = true;
      state.visibleIndexes = new Array(action.payload);
    },
    onRollDown: (state) => {
      // eslint-disable-next-line no-unused-expressions
      state.value = false;
      state.visibleIndexes = [];
    },
    setSearchValue: (state, action) => {
      state.searchKeyward = action.payload;
    },
    handleToggleVisible: (state, action) => {
      state.visibleIndexes = state.visibleIndexes.includes(action.payload)
        ? state.visibleIndexes.filter((idx) => idx !== action.payload)
        : [...state.visibleIndexes, action.payload];
    },
    setVisibleIndexes: (state, action) => {
      state.visibleIndexes = action.payload;
    },
  },
});

export const {
  onRollup,
  onRollDown,
  handleToggleVisible,
  setSearchValue,
  setVisibleIndexes,
} = uiSlice.actions;

export default uiSlice.reducer;
