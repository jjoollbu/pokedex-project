import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PokemonCard.module.css';

function PokemonCard({ pokemon }) {
  if (!pokemon) return null;

  const primaryType = pokemon.types ? pokemon.types[0].type.name : 'normal';
  const cardClasses = `${styles.card} ${styles[primaryType] || ''}`;

  return (
    <Link to={`/pokemon/${pokemon.name}`}>
      <div className={cardClasses}>
        {/* A imagem virá depois, quando tivermos os dados completos */}
        <h3>{pokemon.name}</h3>
      </div>
    </Link>
  );
}

export default PokemonCard;