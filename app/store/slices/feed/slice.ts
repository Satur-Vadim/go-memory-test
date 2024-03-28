import { createSlice } from '@reduxjs/toolkit';


export const initialState = {};

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setFeedState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const {
  setFeedState,
} = feedSlice.actions;

export default feedSlice.reducer;
