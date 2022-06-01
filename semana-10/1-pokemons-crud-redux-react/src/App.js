import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import './App.css';
import PokemonsLayout from './layouts/Pokemonslayout';
import PokemonsCreate from './pages/pokemons/PokemonsCreate';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokemons" replace={true} />} />
      <Route path="/pokemons" element={<PokemonsLayout />}>
        <Route path="create" element={<PokemonsCreate />} />
        <Route path=":id" element={<h2>Actualizar Pokémon</h2>} />
        <Route index element={<h2>Pokémons</h2>} />
      </Route>
      <Route path="*" element={<h2>404</h2>} />
    </Routes>
  );
}

export default App;
