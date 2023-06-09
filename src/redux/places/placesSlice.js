import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  placeItems: []
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
  },
});

export default placesSlice.reducer;
