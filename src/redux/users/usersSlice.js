import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  usersItems: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
});

export default usersSlice.reducer;
