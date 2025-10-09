import React, { useState } from "react";
import PokemonGrid from "../components/pokemon/PokemonGrid";
import PokemonDetailModal from "../components/pokemon/PokemonDetailModal";
import PokemonFilter from "../components/filters/PokemonFilter";
import { usePokemon } from "../hooks/usePokemon";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import styles from "./Home.module.css";

function Home() {
  const [selectedRegion, setSelectedRegion] = useState("kanto");
  const { pokemonList, loading, error } = usePokemon(selectedRegion);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);

  const handleInfoClick = (pokemonId) => {
    setSelectedPokemonId(pokemonId);
  };

  const handleCloseModal = () => {
    setSelectedPokemonId(null);
  };

  return (
    <div className={styles.home}>
      <Header />
      <PokemonFilter
        pokemonList={pokemonList}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        onFilter={setFilteredPokemon}
      />
      <PokemonGrid
        pokemonList={filteredPokemon}
        onCardClick={handleInfoClick}
        loading={loading}
        error={error}
        setFilteredPokemon={setFilteredPokemon}
        allPokemonList={pokemonList}
      />
      {selectedPokemonId && (
        <PokemonDetailModal
          pokemonId={selectedPokemonId}
          onClose={handleCloseModal}
        />
      )}
      <Footer />
    </div>
  );
}

export default Home;
