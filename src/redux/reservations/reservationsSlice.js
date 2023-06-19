import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3000/api/v1/reservations';

const initialState = {
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
      return rejectWithValue(e.message);
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
        isLoading: true,
      }))
      .addCase(createReservation.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        ifSucceed: true,
        reservationsItems: [...state.reservationsItems, action.payload],
      }))
      .addCase(createReservation.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        errors: action.payload,
      }));
  },
});

export default reservationsSlice.reducer;
