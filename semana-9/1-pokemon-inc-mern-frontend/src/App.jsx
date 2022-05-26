import {
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import PokemonsLayout from './layouts/PokemonsLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PokemonsLayout />}>
        <Route path="create" element={<h2>Create Pokémons</h2>} />
        <Route path="update" element={<h2>Update Pokémons</h2>} />
        <Route index element={<h2>Pokémons</h2>} />
      </Route>
      <Route path="*" element={<h2>404</h2>} />
    </Routes>
  );
}

export default App;
