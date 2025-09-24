import React from 'react';
import { usePokemonDetails } from '../../hooks/usePokemonDetails';
import styles from './PokemonDetailModal.module.css';
import { typeColors } from '../../utils/typeUtils';

const Stat = ({ name, value }) => {
  const percentage = (value / 255) * 100; 
  return (
    <div className={styles.statItem}>
      <span className={styles.statName}>{name}</span>
      <strong>{value}</strong>
      <div className={styles.statBar}>
        <div className={styles.statBarFill} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

function PokemonDetailModal({ pokemonId, onClose }) {
  const { pokemon, loading, error } = usePokemonDetails(pokemonId);

  if (loading) return <div className={styles.modalOverlay}><p style={{color: 'white'}}>Carregando...</p></div>;
  if (error || !pokemon) return null;

  const type1 = pokemon.types[0] || 'default';
  const type2 = pokemon.types[1] || type1;
  const modalStyle = {
    background: `linear-gradient(120deg, ${typeColors[type1].light}, ${typeColors[type2].light})`,
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeButton}>X</button>
        
        <div className={styles.contentGrid}>
          <div className={styles.leftColumn}>
            <p className={styles.pokemonId}>#{String(pokemon.id).padStart(3, '0')}</p>
            <h1 className={styles.pokemonName}>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} className={styles.pokemonImage} />
            <div className={styles.dimensions}>
              <div>
                <p><strong>Height</strong></p>
                <p>{pokemon.height / 10} m</p>
              </div>
              <div>
                <p><strong>Weight</strong></p>
                <p>{pokemon.weight / 10} kg</p>
              </div>
            </div>
          </div>
          
          <div className={styles.rightColumn}>
            <div>
              <h3 className={styles.sectionTitle}>About</h3>
              <p className={styles.aboutText}>{pokemon.flavor_text}</p>
            </div>
            <div>
              <h3 className={styles.sectionTitle}>Abilities</h3>
              <ul className={styles.abilitiesList}>
                {pokemon.abilities.map(ability => (
                  <li key={ability.name} className={styles.ability}>{ability.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.sectionTitle}>Base Stats</h3>
              <div className={styles.statsContainer}>
                {pokemon.stats.map(stat => (
                  <Stat key={stat.name} name={stat.name} value={stat.value} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetailModal;