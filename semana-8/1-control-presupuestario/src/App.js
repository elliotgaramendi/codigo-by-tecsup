import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  const company = {
    name: '💸Control Presupuestario💸',
    slogan: 'Tu dinero es nuestra preocupacion'
  };

  return (
    <>
      <Header
        company={company}
      />
      <img src={logo} className="App-logo" alt="logo" />
    </>
  );
}

export default App;
