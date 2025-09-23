import React, { useState } from 'react';
import PokemonGrid from '../components/pokemon/PokemonGrid';
import { usePokemon } from '../hooks/usePokemon';
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

function Home() {
  const { pokemonList, loading, error } = usePokemon();

  if (loading) return <p style={{ textAlign: 'center', fontSize: '2rem' }}>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
      <Header />
      <PokemonGrid pokemonList={pokemonList} />
      <Footer />
    </div>
  );
}

export default Home;