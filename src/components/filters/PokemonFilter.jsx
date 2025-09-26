import { useState } from "react";
import { useTypes } from "../../hooks/useTypes";
import { usePokemonFilter } from "../../hooks/usePokemonFilter";
import Region from "./Region";
import Type from "./Type";
import SortBy from "./SortBy";
import Search from "./Search";
import styles from "./PokemonFilter.module.css";

const PokemonFilter = ({
  pokemonList,
  selectedRegion,
  setSelectedRegion,
  onFilter,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [sortBy, setSortBy] = useState("id");
  const { types, loading: typesLoading } = useTypes();
  usePokemonFilter({
    pokemonList,
    searchTerm,
    selectedType,
    sortBy,
    onFilter,
  });

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterGrid}>
        <Region
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
        <Type
          types={types}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          typesLoading={typesLoading}
        />
        <SortBy sortBy={sortBy} setSortBy={setSortBy} />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </div>
  );
};

export default PokemonFilter;
