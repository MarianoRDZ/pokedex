import { createSlice } from '@reduxjs/toolkit';
import { fetchPokemons } from './pokemonThunks';

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
  isOpen: false,
  search: '',
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    closeModal: (state) => {
      state.isOpen = false;
      state.data = null;
      state.status = STATUS.idle;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
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

export const { closeModal, setSearch } = pokemonSlice.actions;
export default pokemonSlice.reducer;
