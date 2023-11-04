import { createContext, useEffect, useReducer } from 'react';
import { addToCartAction, removeFromCartAction, updateQuantityAction } from '../actions/CartActions';
import cartReducer from '../reducers/CartReducer';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const { cartItems } = state;

  const addToCart = data => dispatch(addToCartAction(data));

  const removeFromCart = data => dispatch(removeFromCartAction(data));

  const updateQuantity = data => dispatch(updateQuantityAction(data));

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};