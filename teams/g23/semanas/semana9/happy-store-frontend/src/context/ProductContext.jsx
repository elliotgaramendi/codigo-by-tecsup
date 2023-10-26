/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from 'react';
import { products as initialProducts } from '../mocks/products.json';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const header = {
    title: '🛒 Tiendita Feliz 🛒'
  };
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: ''
  });
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setCategories(initialProducts.reduce((categories, element) => {
      categories.includes(element.category) === false && categories.push(element.category);
      return categories;
    }, []));
  }, [setCategories]);

  return (
    <ProductContext.Provider
      value={{
        header,
        filters,
        setFilters,
        categories,
        setCategories,
        products,
        setProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};