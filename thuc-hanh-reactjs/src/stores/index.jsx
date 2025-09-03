import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productReducer';
import postSlice from './postReducer';

export const store = configureStore({
  reducer: {
    product: productSlice,
    post: postSlice,
  }
});