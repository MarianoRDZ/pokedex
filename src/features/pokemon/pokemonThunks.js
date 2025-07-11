import { getDetailedPokemonList } from '../../api/pokemon';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async () => {
    const pokemons = await getDetailedPokemonList(151);
    return pokemons;
  }
);
