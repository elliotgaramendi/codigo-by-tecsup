import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducer: {}
});

export const { } = cartSlice.actions;
export default cartSlice.reducer;