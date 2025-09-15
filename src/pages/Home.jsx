import React, { useState, useEffect } from 'react';
import PokemonGrid from '../components/pokemon/PokemonGrid';

function Home() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Erro ao buscar a lista de pokémons: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Pokédex</h1>
      <PokemonGrid pokemonList={pokemonList} />
    </div>
  );
}

export default Home;