import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3000/api/v1/users';

const initialState = {
  name: '',
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
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitLoginForm.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(submitLoginForm.fulfilled, (state) => ({
        ...state,
        isLoading: false,
        ifSucceed: true,
      }))
      .addCase(submitLoginForm.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        errors: action.payload,
      }));
  },
});

export const { setName } = loginSlice.actions;

export default loginSlice.reducer;
