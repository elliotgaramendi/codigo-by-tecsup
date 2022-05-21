import './App.css';
import Header from './components/sections/Header';

function App() {

  const company = {
    name: 'Patita Feliz',
    slogan: '🐭Porque es parte de nuestra familia, lo cuidamos.🐭'
  };

  return (
    <Header
      company={company}
    />
  );
}

export default App;
