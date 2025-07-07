import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDetailedPokemonList } from '../../api/pokemon';

export const STATUS = {
  idle: 'idle',
  loading: 'loading',
  succeeded: 'succeeded',
  failed: 'failed',
};

const initialState = {
  pokemons: [],
  status: STATUS.idle,
  error: null,
};

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async () => {
    const pokemons = await getDetailedPokemonList(50);
    return pokemons;
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.status = STATUS.succeeded;
        state.pokemons = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.status = STATUS.failed;
        state.error = action.error.message;
      });
  },
});

export default pokemonSlice.reducer;
