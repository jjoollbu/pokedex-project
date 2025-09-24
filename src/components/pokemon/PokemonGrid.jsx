import React from 'react';
import PokemonCard from './PokemonCard';

function PokemonGrid({ pokemonList, loading, error, onCardClick, onTypeClick }) {

  if (loading) return <div style={{ textAlign: 'center', margin: '2rem' }}>Carregando...</div>;
  if (error) return <div style={{ textAlign: 'center', margin: '2rem', color: 'red' }}>Erro: {error}</div>;
  
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {pokemonList.map(pokemon => (
        <PokemonCard 
          key={pokemon.id} 
          pokemon={pokemon}
          onCardClick={onCardClick}
          OnTypeClick={onTypeClick}
        />
      ))}
    </div>
  );
}

export default PokemonGrid;