import { createSlice } from '@reduxjs/toolkit';

const TabState = ['PROJECTS' | 'STUDIO info.'];

const initialState = {
  value: 'PROJECTS',
};

export const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    onChange: (state) => {
      state.value === TabState[0]
        ? (state.value = TabState[1])
        : (state.value = TabState[0]);
    },
  },
});
