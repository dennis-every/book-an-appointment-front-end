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
  reservations: [],
  isLoading: true,
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReservations.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getReservations.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        reservations: action.payload,
      }))
      .addCase(getReservations.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default reservationsSlice.reducer;
