import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cartItems.findIndex(element => element.id === action.payload.id) === -1) {
        const newCartItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
        state.cartItems = newCartItems;
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      } else {
        const newCartItems = state.cartItems.map(element => element.id !== action.payload.id ? element : { ...element, quantity: element.quantity + 1 });
        state.cartItems = newCartItems;
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      }
    },
    removeFromCart: (state, action) => {
      const newCartItems = state.cartItems.filter(element => element.id !== action.payload.id);
      state.cartItems = newCartItems;
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    },
    updateQuantity: (state, action) => {
      const changeValue = (quantity, value) => quantity + value <= 0 || quantity + value > 10 ? quantity : quantity + value;
      const newCartItems = state.cartItems.map(element => {
        return element.id !== action.payload.element.id ? element : { ...element, quantity: changeValue(element.quantity, action.payload.value) };
      });
      state.cartItems = newCartItems;
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;