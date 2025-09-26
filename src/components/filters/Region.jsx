import React from "react";
import styles from "./PokemonFilter.module.css";
import { REGIONS } from "../../service/api";

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
        {Object.entries(REGIONS).map(([key, region]) => (
          <option key={key} value={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)} ({region.limit})
          </option>
        ))}
      </select>
    </div>
  );
};

export default RegionFilter;
