import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDetailedPokemonList } from '../../api/pokemon';

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async (_, thunkAPI) => {
    try {
      const response = await getDetailedPokemonList(151);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
