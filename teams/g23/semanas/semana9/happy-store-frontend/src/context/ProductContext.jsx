/* eslint-disable react/prop-types */

import { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const header = {
    title: '🛒 Tiendita Feliz 🛒'
  };
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: ''
  });
  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider
      value={{
        header,
        filters,
        setFilters,
        products,
        setProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};