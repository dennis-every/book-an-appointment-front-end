import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions
const FETCH_PLACES = 'final_capstone_frontend/places/FETCH_PLACES';

// URL
const placesURL = 'http://127.0.0.1:3000/api/v1/places';

// Async function
const fetchPlacesAsync = createAsyncThunk(
  FETCH_PLACES,
  async () => {
    const response = await fetch(placesURL);
    const output = await response.json();
    return output;
  },
);

const initialState = [];

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlacesAsync.fulfilled, (state, action) => (
        [...action.payload]
      ));
  },
});

export { fetchPlacesAsync };

export default placesSlice.reducer;
