import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './redux/reservations/reservationsSlice';
import loginReducer from './redux/login/loginSlice';

export default function createMockStore(initialState) {
  const store = configureStore({
    reducer: {
      reservations: reservationsReducer,
      login: loginReducer,
    },
    preloadedState: initialState,
  });
  return store;
}
