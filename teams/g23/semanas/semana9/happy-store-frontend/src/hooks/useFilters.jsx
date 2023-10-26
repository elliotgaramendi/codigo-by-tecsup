import useProducts from './useProducts';

const useFilters = () => {
  const { filters, setFilters } = useProducts();

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