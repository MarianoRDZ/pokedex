import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPokemonList } from '../api/pokemon';

export const fetchPokemonList = createAsyncThunk(
  'pokemon/fetchList',
  async () => {
    const res = await getPokemonList();
    return res;
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
