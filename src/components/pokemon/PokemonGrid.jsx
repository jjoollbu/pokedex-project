import React from 'react';
import PokemonCard from './PokemonCard';

function PokemonGrid({ pokemonList }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {pokemonList.map(pokemon => (
        <PokemonCard 
          key={pokemon.name} 
          pokemon={pokemon} 
        />
      ))}
    </div>
  );
}

export default PokemonGrid;