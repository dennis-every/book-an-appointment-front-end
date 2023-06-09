import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reservationsItems: []
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
  },
});

export default reservationsSlice.reducer;
