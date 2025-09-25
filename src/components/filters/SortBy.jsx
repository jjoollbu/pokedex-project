import React from "react";
import styles from "./PokemonFilter.module.css";

const SortFilter = ({ sortBy, setSortBy }) => {
  const handleSortChange = (e) => setSortBy(e.target.value);
  return (
    <div className={styles.filterGroup}>
      <label htmlFor="sort" className={styles.filterLabel}>
        SORT BY
      </label>
      <select
        id="sort"
        value={sortBy}
        onChange={handleSortChange}
        className={styles.filterSelect}
      >
        <option value="id">ID (ascending)</option>
        <option value="id-desc">ID (descending )</option>
        <option value="name">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
      </select>
    </div>
  );
};

export default SortFilter;
