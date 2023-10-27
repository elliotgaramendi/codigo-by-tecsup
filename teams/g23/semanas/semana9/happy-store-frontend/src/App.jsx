import Filters from './components/layouts/Filters';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Products from './components/products/Products';
import SectionWrapper from './components/wrappers/SectionWrapper';
import { IS_DEVELOPMENT } from './configs/configs';
import useProducts from './hooks/useProducts';

function App() {
  const { header, filters, products } = useProducts();

  return (
    <>
      <Header title={header.title} />
      <SectionWrapper>
        <Filters />
        <Products data={products} />
      </SectionWrapper>
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  );
}

export default App;