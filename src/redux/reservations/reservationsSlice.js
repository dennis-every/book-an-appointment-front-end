import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  reservationsItems: [],
  ifSucceed: false,
  isLoading: false,
  errors: null,
};

export const getReservations = createAsyncThunk('reservations/getReservations',
  async (userId) => {
    const getUrl = `http://localhost:3000//api/v1/users/${userId}/reservations`;
    try {
      const response = await fetch(getUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      return error.message();
    }
  });

const URL = 'http://localhost:3000/api/v1/reservations';

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
        isLoading: false,
        errors: 'An error occurred',
      }))
      .addCase(getReservations.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getReservations.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        reservationsItems: action.payload,
      }))
      .addCase(getReservations.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default reservationsSlice.reducer;
