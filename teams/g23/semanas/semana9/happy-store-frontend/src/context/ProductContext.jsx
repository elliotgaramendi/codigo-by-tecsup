/* eslint-disable react/prop-types */

import { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider
      value={{
        products: products,
        setProducts: setProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};