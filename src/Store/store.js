import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Users/userSlice';

const store =configureStore({
  reducer: {
    users: userReducer,
  }
});
export default store;