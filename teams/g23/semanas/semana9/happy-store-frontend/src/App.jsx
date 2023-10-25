import Header from './components/Header';
import Products from './components/Products';
import SectionWrapper from './components/SectionWrapper';
import { products } from './mocks/products.json';

function App() {
  const header = {
    title: '🛒 Tiendita Feliz 🛒'
  };

  return (
    <>
      <Header title={header.title} />
      <SectionWrapper>
        <Products data={products} />
      </SectionWrapper>
    </>
  );
}

export default App;