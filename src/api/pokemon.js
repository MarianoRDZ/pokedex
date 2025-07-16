import API from './axios';

const ENDPOINT = '/pokemon';

/**
 * Fetches a basic list of Pokemon with their names and detail URLs
 * @param {number} limit - The number of Pokemon to fetch
 * @returns {Promise<Array<{name: string, url: string}>>}
 */
export const getPokemonList = async (limit = 50) => {
  try {
    const response = await API.get(`${ENDPOINT}?limit=${limit}`);

    if (!response?.data?.results) {
      console.warn('getPokemonList: Unexpected response format', response.data);
      return [];
    }

    return response.data.results.map(({ name, url }) => ({ name, url }));
  } catch (error) {
    console.error('Error fetching Pokémon list:', error);
    return [];
  }
};

/**
 * Fetches detailed information for a list of Pokemon
 * @param {number} limit - The number of Pokemon to fetch in detail
 * @returns {Promise<Array<Object>>}
 */
export const getDetailedPokemonList = async (limit = 50) => {
  const pokemonList = await getPokemonList(limit);

  if (!pokemonList.length) {
    console.warn('getDetailedPokemonList: No Pokemon list retrieved');
    return [];
  }

  const detailedList = await Promise.allSettled(
    pokemonList.map(async ({ url }) => {
      try {
        const { data } = await API.get(url);

        return {
          name: data.name,
          id: data.id,
          types: data.types,
          height: data.height,
          weight: data.weight,
          sprite:
            data.sprites?.other?.['official-artwork']?.front_default ?? '',
          stats: {
            hp: data.stats.find((s) => s.stat.name === 'hp') ?? null,
            attack: data.stats.find((s) => s.stat.name === 'attack') ?? null,
            defense: data.stats.find((s) => s.stat.name === 'defense') ?? null,
            speed: data.stats.find((s) => s.stat.name === 'speed') ?? null,
          },
        };
      } catch (error) {
        console.error(`Error fetching details for Pokémon at ${url}:`, error);
        return null; // Fallback: return null so it can be filtered out
      }
    })
  );

  return detailedList
    .filter((result) => result.status === 'fulfilled' && result.value !== null)
    .map((result) => result.value);
};
