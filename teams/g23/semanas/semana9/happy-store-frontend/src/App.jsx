import { useEffect, useState } from 'react';
import Header from './components/Header';
import Products from './components/Products';
import SectionWrapper from './components/SectionWrapper';
import { products as initialProducts } from './mocks/products.json';

function App() {
  const header = {
    title: '🛒 Tiendita Feliz 🛒'
  };

  const [products, setProducts] = useState([]);
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

  useEffect(() => {
    setProducts(filterProducts(initialProducts));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <>
      <Header
        title={header.title}
        setFilters={setFilters}
      />
      <SectionWrapper>
        <Products data={products} />
      </SectionWrapper>
    </>
  );
}

export default App;