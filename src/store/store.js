import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../features/pokemon/pokemonSlice';
import pokemonDetailsReducer from '../features/pokemon/pokemonDetailsSlice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    pokemonDetails: pokemonDetailsReducer,
  },
});
