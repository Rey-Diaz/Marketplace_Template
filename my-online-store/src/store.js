// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
  
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false, // Turn off the serialization check
  }),
  devTools: {
    serialize: true, // Serialize the state and actions in the Redux DevTools
  },
});