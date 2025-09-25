import React from "react";
import styles from "./PokemonFilter.module.css";

const RegionFilter = ({ selectedRegion, setSelectedRegion }) => {
  const handleRegionChange = (e) => setSelectedRegion(e.target.value);
  return (
    <div className={styles.filterGroup}>
      <label htmlFor="region" className={styles.filterLabel}>
        REGION
      </label>
      <select
        id="region"
        value={selectedRegion}
        onChange={handleRegionChange}
        className={styles.filterSelect}
      >
        <option value="kanto">Kanto (151)</option>
        <option value="johto">Johto (100)</option>
        <option value="hoenn">Hoenn (135)</option>
        <option value="sinnoh">Sinnoh (107)</option>
        <option value="unova">Unova (156)</option>
        <option value="kalos">Kalos (72)</option>
        <option value="alola">Alola (88)</option>
        <option value="galar">Galar (89)</option>
      </select>
    </div>
  );
};

export default RegionFilter;
