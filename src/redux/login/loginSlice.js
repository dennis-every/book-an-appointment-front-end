import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3000/api/v1/login';

const initialState = {
  userName: '',
  userId: null,
  ifSucceed: false,
  ifLoading: false,
  errors: null,
};

export const submitLoginForm = createAsyncThunk(
  'login/submitLoginForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(URL, formData);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitLoginForm.pending, (state) => ({
        ...state,
        ifLoading: true,
      }))
      .addCase(submitLoginForm.fulfilled, (state, action) => ({
        ...state,
        ifLoading: false,
        ifSucceed: true,
        userId: action.payload.id,
        userName: action.payload.name,
      }))
      .addCase(submitLoginForm.rejected, (state, action) => ({
        ...state,
        ifLoading: false,
        errors: action.payload,
      }));
  },
});

export default loginSlice.reducer;
