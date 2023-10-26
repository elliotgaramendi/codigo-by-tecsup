import { useState } from 'react';

const useFilters = () => {
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: ''
  });

  const filterProducts = data => {
    return data.filter(element => {
      return (
        element.price >= filters.minPrice &&
        (
          filters.category === '' ||
          element.category === filters.category
        )
      );
    });
  };

  return [filters, setFilters, filterProducts];
};

export default useFilters;