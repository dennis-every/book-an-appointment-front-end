import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './redux/reservations/reservationsSlice';
import usersReducer from './redux/users/usersSlice';

export default function createMockStore(initialState) {
  const store = configureStore({
    reducer: {
      reservations: reservationsReducer,
      users: usersReducer,
    },
    preloadedState: initialState,
  });
  return store;
}
