import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './places/placesSlice';
import reservationsReducer from './reservations/reservationsSlice';
import usersReducer from './users/usersSlice';
import loginReducer from './login/loginSlice';

export const store = configureStore({
  reducer: {
    places: placesReducer,
    reservations: reservationsReducer,
    users: usersReducer,
    login: loginReducer,
  },
});

export default store;
