// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import cartReducer from './features/cart/cartSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  // ...other reducers
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] // only cart will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // ...other middleware and enhancers
});

export const persistor = persistStore(store);
