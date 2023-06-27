import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions
const FETCH_PLACES = 'final_capstone_frontend/places/FETCH_PLACES';
const ADD_PLACE = 'final_capstone_frontend/places/ADD_PLACE';

// URL
const placesURL = 'https://throbbing-leaf-3980.fly.dev/api/v1/places';

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

// Remove place
const delPlace = createAsyncThunk('places/delPlace',
  async (id) => {
    try {
      const deleteUrl = `${placesURL}/${id}`;
      await fetch(deleteUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const placeId = parseInt(id, 10);
      return placeId;
    } catch (error) {
      return error.message();
    }
  });

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
      ))
      .addCase(delPlace.fulfilled,
        (state, action) => state.filter((place) => place.id !== action.payload));
  },
});

export { fetchPlacesAsync, addPlaceAsync, delPlace };

export default placesSlice.reducer;
