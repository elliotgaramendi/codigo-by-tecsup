import Header from "./components/Header";

function App() {
  const header = {
    title: '🛒 Tiendita Feliz 🛒'
  };

  return (
    <Header title={header.title} />
  );
}

export default App;