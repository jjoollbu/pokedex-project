import { useMemo } from 'react';

export function filterPokemonByType(pokemonList, type) {
  return pokemonList.filter(pokemon => pokemon.types.includes(type));
}

export function handleTypeClick(pokemonList, setFilteredPokemon) {
  return (type) => {
    setFilteredPokemon(filterPokemonByType(pokemonList, type));
  };
}
export const useFilters = (pokemonList, { searchTerm, selectedType, sortBy }) => {
  const filteredPokemon = useMemo(() => {
    if (!pokemonList) return [];
    
    let filtered = [...pokemonList];
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(pokemon => 
        pokemon.name.toLowerCase().includes(term) ||
        pokemon.id.toString().includes(term)
      );
    }
    

    if (selectedType) {
      filtered = filtered.filter(pokemon => 
        pokemon.types.includes(selectedType.toLowerCase())
      );
    }
    
    return filtered;
  }, [pokemonList, searchTerm, selectedType, sortBy]);

  return { filteredPokemon };
};