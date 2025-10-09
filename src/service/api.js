
const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';


const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000;


export const REGIONS = {
  kanto: { limit: 151, offset: 0 },
  johto: { limit: 100, offset: 151 },
  hoenn: { limit: 135, offset: 251 },
  sinnoh: { limit: 107, offset: 386 },
  unova: { limit: 156, offset: 493 },
  kalos: { limit: 72, offset: 649 },
  alola: { limit: 88, offset: 721 },
  galar: { limit: 89, offset: 809 }
};


const fetchWithCache = async (url) => {
  const now = Date.now();
  const cached = cache.get(url);

  if (cached && now - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    cache.set(url, { data, timestamp: now });
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};


export const getPokemonByRegion = async (region = 'kanto') => {
  try {
    const { limit, offset } = REGIONS[region] || REGIONS.kanto;
    const url = `${POKEAPI_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`;

    const data = await fetchWithCache(url);


    const pokemonList = data.results.map((pokemon, index) => ({
      id: offset + index + 1,
      name: pokemon.name,
      url: pokemon.url
    }));

    return pokemonList;
  } catch (error) {
    console.error('Error fetching Pokémon by region:', error);
    throw error;
  }
};


export const getPokemonDetails = async (identifier) => {
  try {
    const url = `${POKEAPI_BASE_URL}/pokemon/${identifier}`;
    const data = await fetchWithCache(url);


    const speciesResponse = await fetch(data.species.url);
    const speciesData = await speciesResponse.json();


    return {
      id: data.id,
      name: data.name,
      image: data.sprites.other['dream_world'].front_default ||
        data.sprites.front_default,
      types: data.types.map(typeInfo => typeInfo.type.name),
      stats: data.stats.map(stat => ({
        name: stat.stat.name,
        value: stat.base_stat
      })),
      height: data.height,
      weight: data.weight,
      abilities: data.abilities.map(ability => ({
        name: ability.ability.name,
        is_hidden: ability.is_hidden
      })),
      base_experience: data.base_experience,
      moves: data.moves.slice(0, 5).map(move => move.move.name),
      color: speciesData.color?.name || 'unknown',
      habitat: speciesData.habitat?.name || 'unknown',
      generation: speciesData.generation?.name || 'unknown',
      flavor_text: speciesData.flavor_text_entries?.find(entry =>
        entry.language.name === 'en'
      )?.flavor_text || 'No description available'
    };
  } catch (error) {
    console.error('Error fetching Pokémon details:', error);
    throw error;
  }
};


export const getAllTypes = async () => {
  try {
    const url = `${POKEAPI_BASE_URL}/type?limit=20`;
    const data = await fetchWithCache(url);
    return data.results.map(type => type.name);
  } catch (error) {
    console.error('Error fetching Pokémon types:', error);
    throw error;
  }
};


export const getPokemonByType = async (type) => {
  try {
    const url = `${POKEAPI_BASE_URL}/type/${type}`;
    const data = await fetchWithCache(url);

    return data.pokemon.map(pokemon => ({
      name: pokemon.pokemon.name,
      url: pokemon.pokemon.url
    }));
  } catch (error) {
    console.error('Error fetching Pokémon by type:', error);
    throw error;
  }
};


export const getPokemonEvolution = async (id) => {
  try {
    const speciesUrl = `${POKEAPI_BASE_URL}/pokemon-species/${id}`;
    const speciesData = await fetchWithCache(speciesUrl);

    const evolutionChainUrl = speciesData.evolution_chain.url;
    const evolutionData = await fetchWithCache(evolutionChainUrl);


    const processEvolutionChain = (chain) => {
      const result = [];
      let current = chain;

      while (current) {
        const id = current.species.url.split('/').slice(-2, -1)[0];
        result.push({
          id: parseInt(id),
          name: current.species.name,
          trigger: current.evolution_details[0]?.trigger?.name || 'unknown',
          min_level: current.evolution_details[0]?.min_level || null
        });
        current = current.evolves_to[0];
      }

      return result;
    };

    return processEvolutionChain(evolutionData.chain);
  } catch (error) {
    console.error('Error fetching Pokémon evolution:', error);
    throw error;
  }
};


export const searchPokemon = async (searchTerm) => {
  try {

    try {
      const directResult = await getPokemonDetails(searchTerm.toLowerCase());
      return [directResult];
    } catch (error) {

      const allKantoPokemon = await getPokemonByRegion('kanto');
      return allKantoPokemon.filter(pokemon =>
        pokemon.name.includes(searchTerm.toLowerCase()) ||
        pokemon.id.toString() === searchTerm
      );
    }
  } catch (error) {
    console.error('Error searching Pokémon:', error);
    throw error;
  }
};