import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonByName } from '../../api/pokemon';

export const fetchPokemonDetails = createAsyncThunk(
  'pokemon/fetchDetails',
  async (name) => {
    const response = await getPokemonByName(name);
    return response;
  }
);

const pokemonDetailsSlice = createSlice({
  name: 'pokemonDetails',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
    isOpen: false,
  },
  reducers: {
    closeModal: (state) => {
      state.isOpen = false;
      state.data = null;
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonDetails.pending, (state) => {
        state.status = 'loading';
        state.isOpen = true;
      })
      .addCase(fetchPokemonDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPokemonDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { closeModal } = pokemonDetailsSlice.actions;
export default pokemonDetailsSlice.reducer;
