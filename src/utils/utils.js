export const convertPokemonIdToThreeDigits = (pokemonId) =>
  pokemonId.toString().padStart(3, 0);

export const getPokemonTypes = (pokemon) => pokemon.types.map((type) => type);
