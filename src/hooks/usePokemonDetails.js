import { useState, useEffect } from 'react';
import { getPokemonDetails } from '../service/api';

export const usePokemonDetails = (pokemonId) => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!pokemonId) {
            setPokemon(null);
            return;
        }

        const fetchDetails = async () => {
            try {
                setLoading(true);
                setError(null);

                const details = await getPokemonDetails(pokemonId);
                setPokemon(details);
            } catch (err) {
                setError(err.message);
                console.error('Error fetching Pokémon details:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, [pokemonId]);

    return { pokemon, loading, error };
};