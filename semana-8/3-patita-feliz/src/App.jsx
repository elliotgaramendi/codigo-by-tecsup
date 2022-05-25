import './App.css';
import Header from './components/sections/Header';
import Appointments from './pages/Appointments';

function App() {

  const company = {
    name: 'Patita Feliz',
    slogan: '🐭Porque es parte de nuestra familia, lo cuidamos.🐭'
  };

  return (
    <>
      <Header
        company={company}
      />
      <main className="py-3">
        <Appointments />
      </main>
    </>
  );
}

export default App;
