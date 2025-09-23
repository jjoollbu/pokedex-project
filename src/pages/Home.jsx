import React, { useState } from 'react';
import PokemonGrid from '../components/pokemon/PokemonGrid';
import PokemonFilter from '../components/filters/PokemonFilter';
import { usePokemon } from '../hooks/usePokemon';
import { useFilters } from '../hooks/useFilters';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import styles from './Home.module.css';

function Home() {
  const [selectedRegion, setSelectedRegion] = useState('kanto');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [sortBy, setSortBy] = useState('id');

  const { pokemonList, loading, error } = usePokemon(selectedRegion);
  const { filteredPokemon } = useFilters(pokemonList, {
    searchTerm,
    selectedType,
    sortBy
  });
  if (loading) return <div className={styles.loading}>Carregando...</div>;
  if (error) return <div className={styles.error}>Erro: {error}</div>;

  return (
    <div className={styles.home}>
      <Header />

      <PokemonFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        sortBy={sortBy}
        setSortBy={setSortBy}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />

      <main className={styles.main}>
        <PokemonGrid
          pokemonList={filteredPokemon}
          onTypeClick={(type) => setSelectedType(type)}
        />
      </main>

      <Footer />
    </div>
  );
}

export default Home;