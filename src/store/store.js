import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../features/pokemon/pokemonSlice';
import pokemonModalReducer from '../features/pokemon/pokemonModalSlice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    pokemonModal: pokemonModalReducer,
  },
});
