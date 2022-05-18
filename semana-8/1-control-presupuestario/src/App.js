import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const company = {
    name: '💸Control Presupuestario💸',
    slogan: 'Tu dinero es nuestra preocupacion'
  };

  const currentDateYear = new Date().getFullYear();
  const author = 'ELGS';

  return (
    <>
      <Header
        company={company}
      />
      <img src={logo} className="App-logo" alt="logo" />
      <Footer
        currentDateYear={currentDateYear}
        author={author}
      />
    </>
  );
}

export default App;
