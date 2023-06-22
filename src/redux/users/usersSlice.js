import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const LOGIN_URL = 'https://boiling-taiga-49294-bcedd3da6f09.herokuapp.com/api/v1/login';
const SIGNUP_URL = 'https://boiling-taiga-49294-bcedd3da6f09.herokuapp.com/api/v1/signup';

const initialState = {
  userName: '',
  userId: null,
  ifSucceed: false,
  ifLoading: false,
  errors: null,
};

export const submitLoginForm = createAsyncThunk(
  'users/submitLoginForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(LOGIN_URL, formData);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const submitSignupForm = createAsyncThunk(
  'users/submitSignupForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(SIGNUP_URL, formData);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const usersSlice = createSlice({
  name: 'users',
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
      }))
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

export default usersSlice.reducer;
