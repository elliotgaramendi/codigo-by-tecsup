import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [cartItems, setCartItems] = useState(initialCartItems);

  const addToCart = data => {
    if (cartItems.findIndex(element => element.id === data.id) === -1) {
      setCartItems([...cartItems, { ...data, quantity: 1 }]);
    } else {
      setCartItems(cartItems.map(element => {
        return element.id !== data.id ? element : { ...element, quantity: element.quantity + 1 };
      }));
    }
  };

  const removeFromCart = data => setCartItems(cartItems.filter(element => element.id !== data.id));

  const updateQuantity = data => {
    const changeValue = (quantity, value) => quantity + value <= 0 || quantity + value > 10 ? quantity : quantity + value;

    setCartItems(cartItems.map(element => {
      return element.id !== data.element.id ? element : { ...element, quantity: changeValue(element.quantity, data.value) };
    }));
  };

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