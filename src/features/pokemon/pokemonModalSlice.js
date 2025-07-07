import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  selectedPokemon: null,
};

const pokemonModalSlice = createSlice({
  name: 'pokemonModal',
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.selectedPokemon = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.selectedPokemon = null;
    },
  },
});

export const { openModal, closeModal } = pokemonModalSlice.actions;
export default pokemonModalSlice.reducer;
