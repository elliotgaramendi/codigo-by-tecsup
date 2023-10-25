import Header from './components/Header';
import SectionWrapper from './components/SectionWrapper';

function App() {
  const header = {
    title: '🛒 Tiendita Feliz 🛒'
  };

  return (
    <>
      <Header title={header.title} />
      <SectionWrapper>
        <h2>Productos</h2>
      </SectionWrapper>
    </>
  );
}

export default App;