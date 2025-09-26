import { useMemo, useEffect } from "react";


export function usePokemonFilter({
  pokemonList,
  searchTerm = "",
  selectedType = "",
  sortBy = "id",
  onFilter,
}) {
  const filteredPokemon = useMemo(() => {
    if (!pokemonList) return [];
    let filtered = [...pokemonList];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().includes(term) ||
          pokemon.id.toString().includes(term)
      );
    }

    if (selectedType) {
      filtered = filtered.filter((pokemon) =>
        pokemon.types.includes(selectedType.toLowerCase())
      );
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "id":
          return a.id - b.id;
        case "id-desc":
          return b.id - a.id;
        case "name":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return a.id - b.id;
      }
    });
    return filtered;
  }, [pokemonList, searchTerm, selectedType, sortBy]);

  useEffect(() => {
    if (onFilter) onFilter(filteredPokemon);

  }, [filteredPokemon, onFilter]);

  return filteredPokemon;
}
