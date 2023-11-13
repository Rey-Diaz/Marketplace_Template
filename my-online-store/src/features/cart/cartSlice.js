// src/features/cart/cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("Adding to cart:", action.payload);
        // Find the index of the item in the cart
        const existingIndex = state.items.findIndex(
          (item) => item._id === action.payload.id
        );
  
        if (existingIndex >= 0) {
          // If the item exists, update the quantity
          state.items[existingIndex].quantity += 1;
        } else {
          // If the item doesn't exist, add the new item to the cart
          state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item._id === action.payload.id);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    updateQuantity: (state, action) => {
      const item = state.items.find((item) => item._id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    // Add other reducers as needed
  },
  // extraReducers if you have any
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
 
