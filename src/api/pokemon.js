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
        sprite: response.data.sprites.front_default,
      };
    })
  );

  return detailedList;
};

export const getPokemonByName = async (name) => {
  const response = await API.get(`${ENDPOINT}/${name}`);

  return {
    name: response.data.name,
    id: response.data.id,
    types: response.data.types,
    height: response.data.height,
    weight: response.data.weight,
    sprite: response.data.sprites.front_default,
  };
};
