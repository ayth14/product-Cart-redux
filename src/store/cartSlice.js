import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    delete(state, action) {
      state = state.filter((items) => items.id !== action.payload);
    },
  },
});

export const { add } = cartSlice.actions;
export default cartSlice.reducer;
