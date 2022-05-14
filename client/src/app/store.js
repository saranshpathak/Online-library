import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import bookReducer from '../features/bookSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    book:bookReducer,
  },
});
