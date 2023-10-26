import { useEffect, useState } from 'react';
import Products from './components/Products/Products';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import SectionWrapper from './components/wrappers/SectionWrapper';
import { IS_DEVELOPMENT } from './configs/configs';
import useFilters from './hooks/useFilters';
import { products as initialProducts } from './mocks/products.json';

function App() {
  const header = {
    title: '🛒 Tiendita Feliz 🛒'
  };

  const [products, setProducts] = useState([]);
  const [filters, setFilters, filterProducts] = useFilters();

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
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  );
}

export default App;