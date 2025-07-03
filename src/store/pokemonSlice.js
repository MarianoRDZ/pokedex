import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_POKEMON_API;

export const fetchPokemonList = createAsyncThunk(
  'pokemon/fetchList',
  async () => {
    const res = await axios.get(`${API_URL}/pokemon?limit=20`);
    return res.data.results;
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    loading: false,
    error: null,
    list: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchPokemonList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default pokemonSlice.reducer;
