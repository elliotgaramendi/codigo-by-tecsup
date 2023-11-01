import { ADD_TO_CART } from '../types/CartTypes';

export const addToCartAction = data => ({
  type: ADD_TO_CART,
  payload: data
});

export const removeFromCartAction = data => ({
  type: REMOVE_FROM_CART,
  payload: data,
});

export const updateQuantityAction = data => ({
  type: UPDATE_QUANTITY,
  payload: data,
});