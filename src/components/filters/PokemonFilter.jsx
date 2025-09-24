import React, { useState, useMemo, useEffect } from 'react';
import { useTypes } from '../../hooks/useTypes'
import styles from './PokemonFilter.module.css';
const PokemonFilter = ({ pokemonList, selectedRegion, setSelectedRegion, onFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [sortBy, setSortBy] = useState('id');
    const { types, loading: typesLoading } = useTypes();

    const filteredPokemon = useMemo(() => {
        if (!pokemonList) return [];
        let filtered = [...pokemonList];

        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(pokemon =>
                pokemon.name.toLowerCase().includes(term) ||
                pokemon.id.toString().includes(term)
            );
        }

        if (selectedType) {
            filtered = filtered.filter(pokemon =>
                pokemon.types.includes(selectedType.toLowerCase())
            );
        }

        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'id':
                    return a.id - b.id;
                case 'id-desc':
                    return b.id - a.id;
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'name-desc':
                    return b.name.localeCompare(a.name);
                default:
                    return a.id - b.id;
            }
        });

        return filtered;
    }, [pokemonList, searchTerm, selectedType, sortBy]);

    useEffect(() => {
        if (onFilter) onFilter(filteredPokemon);
    }, [filteredPokemon, onFilter]);

    const handleSearchChange = (e) => setSearchTerm(e.target.value);
    const handleTypeChange = (e) => setSelectedType(e.target.value);
    const handleSortChange = (e) => setSortBy(e.target.value);
    const handleRegionChange = (e) => setSelectedRegion(e.target.value);

    return (
        <div className={styles.filterContainer}>
            <div className={styles.filterGrid}>
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
                        <option value="kanto">Kanto (151)</option>
                        <option value="johto">Johto (100)</option>
                        <option value="hoenn">Hoenn (135)</option>
                        <option value="sinnoh">Sinnoh (107)</option>
                        <option value="unova">Unova (156)</option>
                        <option value="kalos">Kalos (72)</option>
                        <option value="alola">Alola (88)</option>
                        <option value="galar">Galar (89)</option>
                    </select>
                </div>

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
                        {types.map(type => (
                            <option key={type} value={type}>
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </option>
                        ))}
                    </select>
                    {typesLoading && <div className={styles.loadingText}>Loading...</div>}
                </div>

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
            </div>
        </div>
    );
};

export default PokemonFilter;