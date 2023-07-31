import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getData from '../api/getData';

const initialState = {
  projects: [],
  initialProjects: [],
};

// async thunk
export const fetchDatas = createAsyncThunk(`getData`, async () => {
  const result = await getData();
  console.log('result', result);
  return result;
});

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    filterProjects: (state, action) => {
      // eslint-disable-next-line no-unused-expressions
      state.projects = state.initialProjects.filter(
        (item) => item.tag === action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDatas.fulfilled, (state, action) => {
      state.initialProjects = action.payload;
      state.projects = action.payload;
    });
  },
});

export const { filterProjects } = dataSlice.actions;

export default dataSlice.reducer;
