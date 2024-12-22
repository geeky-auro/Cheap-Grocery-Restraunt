import { createSlice } from "@reduxjs/toolkit";

// Define the configs for createSlice ;)
const cartSlice = createSlice({
  name: "cart",
  // Treat this as a use State State object
  initialState: {
    items: [],
  },
  // Treat this as a use State State Object function
  // These reducers are responsible for modifying the state object
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

// We will export two things from here ,one is action and other one is reducer
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
