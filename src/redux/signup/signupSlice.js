import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3000/api/v1/signup';

const initialState = {
  userName: '',
  userId: null,
  ifSucceed: false,
  ifLoading: false,
  errors: null,
};

export const submitSignupForm = createAsyncThunk(
  'signup/submitSignupForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(URL, formData);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitSignupForm.pending, (state) => ({
        ...state,
        ifLoading: true,
      }))
      .addCase(submitSignupForm.fulfilled, (state, action) => ({
        ...state,
        ifLoading: false,
        ifSucceed: true,
        userId: action.payload.id,
        userName: action.payload.name,
      }))
      .addCase(submitSignupForm.rejected, (state, action) => ({
        ...state,
        ifLoading: false,
        errors: action.payload,
      }));
  },
});

export default signupSlice.reducer;
