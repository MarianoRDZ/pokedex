import reducer, { STATUS } from './pokemonSlice';
import { fetchPokemons } from './pokemonThunks';

describe('pokemonSlice reducer', () => {
  const initialState = {
    pokemons: [],
    status: STATUS.idle,
    error: null,
    isOpen: false,
    search: '',
  };

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle fetchPokemons.pending', () => {
    const action = { type: fetchPokemons.pending.type };
    const state = reducer(initialState, action);
    expect(state.status).toBe(STATUS.loading);
  });

  it('should handle fetchPokemons.fulfilled', () => {
    const action = {
      type: fetchPokemons.fulfilled.type,
      payload: [{ name: 'bulbasaur', url: 'url' }],
    };
    const state = reducer(initialState, action);
    expect(state.status).toBe(STATUS.succeeded);
    expect(state.pokemons.length).toBe(1);
  });

  it('should handle fetchPokemons.rejected', () => {
    const action = {
      type: fetchPokemons.rejected.type,
      error: { message: 'Failed to fetch' },
    };
    const state = reducer(initialState, action);
    expect(state.status).toBe('failed');
    expect(state.error).toBe('Failed to fetch');
  });
});
