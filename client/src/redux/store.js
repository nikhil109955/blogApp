// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js'; // Import the userReducer directly

const store = configureStore({
  reducer: {
    user: userReducer, // Use userReducer directly here
  },
});

export default store;
