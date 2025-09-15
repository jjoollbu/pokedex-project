import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import PokemonDetail from './pages/PokemonDetail.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
    </Routes>
  );
}

export default App;