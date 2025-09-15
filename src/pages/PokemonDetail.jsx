import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PokemonDetail.css';

function PokemonDetail() {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    // A lógica do fetch continua exatamente a mesma...
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        setPokemonDetails(data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do pokémon:", error);
      }
    };
    fetchPokemonDetails();
  }, [name]);

  if (!pokemonDetails) {
    return <div>Carregando detalhes...</div>;
  }

  const primaryType = pokemonDetails.types[0].type.name;
  const containerClasses = `detailContainer ${primaryType}`;

  return (
    <div className={containerClasses}>
      
      <Link to="/" className="backLink">&larr; Pokédex</Link>

      <h1 className="pokemonName">{pokemonDetails.name}</h1>
      <img 
        className="pokemonImage"
        src={pokemonDetails.sprites.other['official-artwork'].front_default || pokemonDetails.sprites.front_default} 
        alt={pokemonDetails.name} 
      />
      
      <div className="statsContainer">
        <h2>Detalhes:</h2>
        <p><b>ID:</b> {pokemonDetails.id}</p>
        <p><b>Altura:</b> {pokemonDetails.height / 10} m</p>
        <p><b>Peso:</b> {pokemonDetails.weight / 10} kg</p>
        <p><b>Tipos:</b> {pokemonDetails.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
      </div>
    </div>
  );
}

export default PokemonDetail;