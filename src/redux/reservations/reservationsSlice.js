import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3000/api/v1/reservations';

export const initialState = {
  reservationsItems: [],
  ifSucceed: false,
  ifLoading: false,
  errors: null,
};

export const createReservation = createAsyncThunk(
  'reservations/createReservation',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(URL, formData);
      return response.data;
    } catch (e) {
      return rejectWithValue('An error occurred');
    }
  },
);

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createReservation.pending, (state) => ({
        ...state,
        ifLoading: true,
      }))
      .addCase(createReservation.fulfilled, (state, action) => ({
        ...state,
        ifLoading: false,
        ifSucceed: true,
        reservationsItems: [...state.reservationsItems, action.payload],
      }))
      .addCase(createReservation.rejected, (state) => ({
        ...state,
        ifLoading: false,
        errors: 'An error occurred',
      }));
  },
});

export default reservationsSlice.reducer;
