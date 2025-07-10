import API from './axios';

const ENDPOINT = '/pokemon';

export const getPokemonList = async (limit) => {
  const response = await API.get(`${ENDPOINT}/?limit=${limit}`);

  const normalizedData = response.data.results.map((pokemon) => {
    return {
      name: pokemon.name,
      url: pokemon.url,
    };
  });

  return normalizedData;
};

export const getDetailedPokemonList = async (limit = 50) => {
  const pokemonList = await getPokemonList(limit);

  const detailedList = await Promise.all(
    pokemonList.map(async (pokemon) => {
      const response = await API.get(pokemon.url);

      return {
        name: response.data.name,
        id: response.data.id,
        types: response.data.types,
        height: response.data.height,
        weight: response.data.weight,
        sprite: response.data.sprites.other['official-artwork'].front_default,
        stats: {
          hp: response.data.stats.find((stats) => stats.stat.name === 'hp'),
          attack: response.data.stats.find(
            (stats) => stats.stat.name === 'attack'
          ),
          defense: response.data.stats.find(
            (stats) => stats.stat.name === 'defense'
          ),
          speed: response.data.stats.find(
            (stats) => stats.stat.name === 'speed'
          ),
        },
      };
    })
  );

  return detailedList;
};
