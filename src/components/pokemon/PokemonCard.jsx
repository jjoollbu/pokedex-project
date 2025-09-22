import React from 'react';
import styles from './PokemonCard.module.css';
import { typeIcons, typeColors } from '../../utils/typeUtils';

function PokemonCard({ pokemon, onCardClick }) {
  if (!pokemon || !pokemon.types) {
    return null;
  }

  const type1 = pokemon.types[0] || 'default';
  const type2 = pokemon.types[1] || type1;

  const color1 = typeColors[type1].light;
  const color2 = typeColors[type2].light;

  const cardStyle = {
    background: `linear-gradient(to bottom, ${color1}, ${color2})`,
  };

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.cardHeader}>
        <span className={styles.pokemonId}>#{String(pokemon.id).padStart(3, '0')}</span>
        <button className={styles.infoIcon} onClick={(e) => {
          e.stopPropagation();
          onCardClick(pokemon.id);
        }}>
          i
        </button>
      </div>

      {pokemon.image && <img className={styles.pokemonImage} src={pokemon.image} alt={pokemon.name} />}

      <div className={styles.cardBody}>
        <h3 className={styles.pokemonName}>{pokemon.name}</h3>
        <div className={styles.typesContainer}>
          {pokemon.types.map(type => (
            <div 
              key={type} 
              className={styles.typeIcon} 
              style={{ backgroundColor: typeColors[type].strong }}
              title={type}
            >
              <img src={typeIcons[type]} alt={type} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;