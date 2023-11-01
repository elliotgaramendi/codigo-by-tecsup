/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from 'react';
import { products as initialProducts } from '../../mocks/products.json';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const header = {
    title: 'TienditaFeliz'
  };
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: ''
  });
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const filterProducts = data => {
    return data.filter(element => {
      return (
        element.price * (100 - element.discountPercentage) / 100 >= filters.minPrice &&
        (
          filters.category === '' ||
          element.category === filters.category
        )
      );
    });
  };

  useEffect(() => {
    setCategories(initialProducts.reduce((categories, element) => {
      categories.includes(element.category) === false && categories.push(element.category);
      return categories;
    }, []));
  }, []);

  useEffect(() => {
    setProducts(filterProducts(initialProducts));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

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