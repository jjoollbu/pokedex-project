import React from "react";
import styles from "./PokemonFilter.module.css";

const SortOption = {
  id: "ID (ascending)",
  "id-desc": "ID (descending)",
  name: "Name (A-Z)",
  "name-desc": "Name (Z-A)",
};

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
        {Object.entries(SortOption).map(([key, text]) => (
          <option key={key} value={key}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortFilter;
