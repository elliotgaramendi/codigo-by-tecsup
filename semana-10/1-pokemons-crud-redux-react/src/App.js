import { Provider } from 'react-redux';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import './App.css';
import PokemonsLayout from './layouts/Pokemonslayout';
import Landings404Page from './pages/landings/Landings404Page';
import PokemonsCreate from './pages/pokemons/PokemonsCreate';
import PokemonsRead from './pages/pokemons/PokemonsRead';
import PokemonsUpdate from './pages/pokemons/PokemonsUpdate';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Navigate to="/pokemons" replace={true} />} />
        <Route path="/pokemons" element={<PokemonsLayout />}>
          <Route path="create" element={<PokemonsCreate />} />
          <Route path=":id" element={<PokemonsUpdate />} />
          <Route index element={<PokemonsRead />} />
        </Route>
        <Route path="*" element={<Landings404Page />} />
      </Routes>
    </Provider>
  );
}

export default App;
