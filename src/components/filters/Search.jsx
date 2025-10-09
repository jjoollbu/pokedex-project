import React from "react";
import styles from "./PokemonFilter.module.css";

const SearchFilter = ({ searchTerm, setSearchTerm }) => {
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  return (
    <div className={styles.filterGroup}>
      <label htmlFor="search" className={styles.filterLabel}>
        SEARCH
      </label>
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchFilter;
