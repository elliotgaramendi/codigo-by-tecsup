import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <img src={logo} className="App-logo" alt="logo" />
    </>
  );
}

export default App;
