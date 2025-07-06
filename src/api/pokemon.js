import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_POKEMON_API,
});
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
