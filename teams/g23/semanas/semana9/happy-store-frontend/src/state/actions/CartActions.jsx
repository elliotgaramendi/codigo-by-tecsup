import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from '../types/CartTypes';

export const addToCartAction = payload => ({
  type: ADD_TO_CART,
  payload
});

export const removeFromCartAction = payload => ({
  type: REMOVE_FROM_CART,
  payload
});

export const updateQuantityAction = payload => ({
  type: UPDATE_QUANTITY,
  payload
});