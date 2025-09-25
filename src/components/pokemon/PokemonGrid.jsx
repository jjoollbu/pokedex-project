import { filterPokemonByType } from '../../hooks/useFilters';
import PokemonCard from './PokemonCard';

function PokemonGrid({ pokemonList, loading, error, onCardClick, setFilteredPokemon, allPokemonList }) {

  if (loading) return <div style={{ textAlign: 'center', margin: '2rem' }}>Carregando...</div>;
  if (error) return <div style={{ textAlign: 'center', margin: '2rem', color: 'red' }}>Erro: {error}</div>;
  
  const handleTypeClick = (type) => {
    setFilteredPokemon(filterPokemonByType(allPokemonList, type));
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {pokemonList.map(pokemon => (
        <PokemonCard 
          key={pokemon.id} 
          pokemon={pokemon}
          onCardClick={onCardClick}
          OnTypeClick={handleTypeClick}
        />
      ))}
    </div>
  );
}

export default PokemonGrid;