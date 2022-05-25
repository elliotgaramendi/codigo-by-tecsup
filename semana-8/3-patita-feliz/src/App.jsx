import './App.css';
import Footer from './components/sections/Footer';
import Header from './components/sections/Header';
import Appointments from './pages/Appointments';

function App() {

  const company = {
    name: 'Patita Feliz',
    slogan: '🐭Porque es parte de nuestra familia, lo cuidamos.🐭'
  };

  const credits = {
    year: new Date().getFullYear(),
    author: 'ELGS'
  }

  return (
    <>
      <Header
        company={company}
      />
      <main className="py-3">
        <Appointments />
      </main>
      <Footer
        credits={credits}
      />
    </>
  );
}

export default App;
