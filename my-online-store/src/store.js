// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import productReducer from './features/product/productSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer, // Add the product reducer here
  },
  
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false, // Turn off the serialization check
  }),
  devTools: {
    serialize: true, // Serialize the state and actions in the Redux DevTools
  },
});