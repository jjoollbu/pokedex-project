import { useState, useEffect } from 'react';
import { getPokemonByRegion, getPokemonDetails } from '../service/api';

export const usePokemon = (region = 'kanto') => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                setLoading(true);
                setError(null);

                const basicList = await getPokemonByRegion(region);

                const detailedList = await Promise.all(
                    basicList.map(async (pokemon) => {
                        try {
                            const details = await getPokemonDetails(pokemon.id);
                            return {
                                id: details.id,
                                name: details.name,
                                image: details.image,
                                types: details.types
                            };
                        } catch (err) {
                            console.error(`Error fetching details for ${pokemon.name}:`, err);
                            return {
                                id: pokemon.id,
                                name: pokemon.name,
                                image: null,
                                types: []
                            };
                        }
                    })
                );

                setPokemonList(detailedList);
            } catch (err) {
                setError(err.message);
                setPokemonList([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [region]);

    return { pokemonList, loading, error };
};