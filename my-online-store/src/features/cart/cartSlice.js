// src/features/cart/cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
        // Find the index of the item in the cart
        const existingIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
  
        if (existingIndex >= 0) {
          // If the item exists, update the quantity
          state.items[existingIndex].quantity += 1;
        } else {
          // If the item doesn't exist, add the new item to the cart
          state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // Add other reducers like removeFromCart, updateQuantity, clearCart, etc.
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
