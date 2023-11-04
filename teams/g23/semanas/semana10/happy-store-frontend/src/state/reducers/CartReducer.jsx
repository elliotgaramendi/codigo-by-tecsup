import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from '../types/CartTypes';

const cartReducer = (state, action) => {
  const { cartItems } = state;
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
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
    case REMOVE_FROM_CART:
      return ({
        ...state,
        cartItems: cartItems.filter(element => element.id !== payload.id)
      });
    case UPDATE_QUANTITY:
      const changeValue = (quantity, value) => quantity + value <= 0 || quantity + value > 10 ? quantity : quantity + value;
      return ({
        ...state,
        cartItems: cartItems.map(element => {
          return element.id !== payload.element.id ? element : { ...element, quantity: changeValue(element.quantity, payload.value) };
        })
      });
    default:
      return cartItems;
  }
};

export default cartReducer;
