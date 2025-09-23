import React from 'react';
import PokemonCard from './PokemonCard';

function PokemonGrid({ pokemonList, onCardClick }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {pokemonList.map(pokemon => (
        <PokemonCard 
          key={pokemon.id} 
          pokemon={pokemon}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
}

export default PokemonGrid;