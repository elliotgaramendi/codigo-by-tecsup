import {
  Routes,
  Route
} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/create" element={<h2>Create Pokémons</h2>} />
      <Route path="/update" element={<h2>Update Pokémons</h2>} />
      <Route path="/" element={<h2>Pokémons</h2>} />
      <Route path="*" element={<h2>404</h2>} />
    </Routes>
  );
}

export default App;
