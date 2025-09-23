import React from 'react';
import PokemonCard from './PokemonCard';

function PokemonGrid({ pokemonList, onCardClick, onTypeClick }) {
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