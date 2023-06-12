import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getUrl = 'http://127.0.0.1:3000/api/v1/reservations'
export const getReservations = createAsyncThunk('reservations/getReservations',
  async () => {
    try {
      const response = await fetch(getUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      return error.message();
    }
  });

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
