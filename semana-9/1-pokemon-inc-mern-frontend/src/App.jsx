import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import './App.css';
import { PokemonsProvider } from './context/PokemonsContext';
import PokemonsLayout from './layouts/PokemonsLayout';
import PokemonsCreate from './pages/pokemons/PokemonsCreate';
import PokemonsRead from './pages/pokemons/PokemonsRead';

function App() {
  return (
    <PokemonsProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/pokemons" replace={true} />} />
        <Route path="/pokemons" element={<PokemonsLayout />}>
          <Route path="create" element={<PokemonsCreate />} />
          <Route path=":id" element={<h2>Update Pokémons</h2>} />
          <Route index element={<PokemonsRead />} />
        </Route>
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </PokemonsProvider>
  );
}

export default App;
