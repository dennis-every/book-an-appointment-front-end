import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions
const FETCH_PLACES = 'final_capstone_frontend/places/FETCH_PLACES';
const ADD_PLACE = 'final_capstone_frontend/places/ADD_PLACE';

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

const addPlaceAsync = createAsyncThunk(
  ADD_PLACE,
  async (place) => {
    await fetch(placesURL, {
      method: 'POST',
      body: JSON.stringify(place),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return { ...place };
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
      ))
      .addCase(addPlaceAsync.fulfilled, (state, action) => (
        [...state, { ...action.payload }]
      ));
  },
});

export { fetchPlacesAsync, addPlaceAsync };

export default placesSlice.reducer;
