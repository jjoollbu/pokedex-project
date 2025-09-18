import React, { useState } from 'react';
import PokemonGrid from '../components/pokemon/PokemonGrid';
import { usePokemon } from '../hooks/usePokemon';

function Home() {
  const { pokemonList, loading, error } = usePokemon();
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);

  const handleInfoClick = (pokemonId) => {
    setSelectedPokemonId(pokemonId);
  };

  if (loading) return <p style={{ textAlign: 'center', fontSize: '2rem' }}>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
      <PokemonGrid pokemonList={pokemonList} onCardClick={handleInfoClick} />
      
      {selectedPokemonId && (
        <PokemonDetailModal pokemonId={selectedPokemonId} onClose={handleClose-Modal} />
      )}
    </div>
  );
}

export default Home;