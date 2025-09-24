import React, { useState } from 'react';
import PokemonGrid from '../components/pokemon/PokemonGrid';
import PokemonDetailModal from '../components/pokemon/PokemonDetailModal';
import { usePokemon } from '../hooks/usePokemon'; 

function Home() {
  const { pokemonList, loading, error } = usePokemon();
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);

  const handleInfoClick = (pokemonId) => {
    setSelectedPokemonId(pokemonId);
  };

  const handleCloseModal = () => {
    setSelectedPokemonId(null);
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
      <PokemonGrid pokemonList={pokemonList} onCardClick={handleInfoClick} />
      
      {selectedPokemonId && (
        <PokemonDetailModal pokemonId={selectedPokemonId} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Home;