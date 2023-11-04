import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducer: {
    addToCart: (state, action) => {
      const { cartItems } = state;
      const { payload } = action;
      if (cartItems.findIndex(element => element.id === payload.id) === -1) {
        return ({
          ...state,
          cartItems: [...cartItems, { ...payload, quantity: 1 }]
        });
      } else {
        return ({
          ...state,
          cartItems: cartItems.map(element => element.id !== payload.id ? element : { ...element, quantity: element.quantity + 1 })
        });
      }
    },
    removeFromCart: (state, action) => {
      const { cartItems } = state;
      const { payload } = action;
      return ({
        ...state,
        cartItems: cartItems.filter(element => element.id !== payload.id)
      });
    },
    updateQuantity: (state, action) => {
      const { cartItems } = state;
      const { payload } = action;
      return ({
        ...state,
        cartItems: cartItems.map(element => {
          return element.id !== payload.element.id ? element : { ...element, quantity: changeValue(element.quantity, payload.value) };
        })
      });
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;