import React from "react";
import styles from "./PokemonFilter.module.css";

const TypeFilter = ({ types, selectedType, setSelectedType, typesLoading }) => {
  const handleTypeChange = (e) => setSelectedType(e.target.value);
  return (
    <div className={styles.filterGroup}>
      <label htmlFor="type" className={styles.filterLabel}>
        TYPE
      </label>
      <select
        id="type"
        value={selectedType}
        onChange={handleTypeChange}
        className={styles.filterSelect}
        disabled={typesLoading}
      >
        <option value="">All types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeFilter;
