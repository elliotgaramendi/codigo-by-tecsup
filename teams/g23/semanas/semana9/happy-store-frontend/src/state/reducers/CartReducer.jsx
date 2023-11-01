import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from '../types/CartTypes';

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.findIndex(element => element.id === action.payload.id) === -1) {
        return [...state, { ...action.payload, quantity: 1 }];
      } else {
        return state.map(element => element.id !== action.payload.id ? element : { ...element, quantity: element.quantity + 1 });
      }
    case REMOVE_FROM_CART:
      return state.filter(element => element.id !== action.payload.id);
    case UPDATE_QUANTITY:
      const changeValue = (quantity, value) => quantity + value <= 0 || quantity + value > 10 ? quantity : quantity + value;
      return state.map(element => {
        return element.id !== action.payload.element.id ? element : { ...element, quantity: changeValue(element.quantity, action.payload.value) };
      });
    default:
      return state;
  }
};

export default cartReducer;
