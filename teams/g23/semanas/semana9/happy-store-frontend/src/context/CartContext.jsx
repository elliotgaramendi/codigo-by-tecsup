import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = data => {
    if (cartItems.findIndex(element => element.id === data.id) === -1) {
      setCartItems([...cartItems, { ...data, quantity: 1 }])
    } else {
      setCartItems(cartItems.map(element => {
        return element.id !== data.id ? element : { ...element, quantity: element.quantity + 1 };
      }));
    }
  };

  const removeFromCart = data => setCartItems(cartItems.filter(element => element.id !== data));

  const updateQuantity = data => {
    setCartItems(cartItems.map(element => {
      return element.id !== data.id ? element : { ...element, quantity: element.quantity + data.value };
    }));
  }

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
}