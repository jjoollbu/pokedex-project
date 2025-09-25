import React, { useState } from 'react';
import PokemonGrid from '../components/pokemon/PokemonGrid';
import PokemonFilter from '../components/filters/PokemonFilter';
import { usePokemon } from '../hooks/usePokemon';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import styles from './Home.module.css';


function Home() {
  const [selectedRegion, setSelectedRegion] = useState('kanto');
  const { pokemonList, loading, error } = usePokemon(selectedRegion);
  const [filteredPokemon, setFilteredPokemon] = useState([]);



  return (
    <div className={styles.home}>
      <Header />
      <PokemonFilter pokemonList={pokemonList} selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} onFilter={setFilteredPokemon}/>
        <PokemonGrid pokemonList={filteredPokemon} loading={loading} error={error} setFilteredPokemon={setFilteredPokemon} allPokemonList={pokemonList}/>
      <Footer />
    </div>
  );
}

export default Home;