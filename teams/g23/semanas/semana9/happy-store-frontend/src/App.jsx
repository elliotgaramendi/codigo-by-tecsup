import { useEffect } from 'react';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Products from './components/products/Products';
import SectionWrapper from './components/wrappers/SectionWrapper';
import { IS_DEVELOPMENT } from './configs/configs';
import useFilters from './hooks/useFilters';
import useProducts from './hooks/useProducts';
import { products as initialProducts } from './mocks/products.json';

function App() {
  const { header, filters, products, setProducts } = useProducts();
  const [, , filterProducts] = useFilters();

  useEffect(() => {
    setProducts(filterProducts(initialProducts));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <>
      <Header title={header.title} />
      <SectionWrapper>
        <Products data={products} />
      </SectionWrapper>
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  );
}

export default App;