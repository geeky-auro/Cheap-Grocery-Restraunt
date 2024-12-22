import { configureStore, createReducer } from "@reduxjs/toolkit";
import reducer from "./cartSlice";
const appStore = configureStore({
  reducer: {
    // add your slice reducers here
    cart: reducer,
    // If we would have user Slice then we would have added userReducer also just like the below
    // user: userReducer,
  },
});

export default appStore;
