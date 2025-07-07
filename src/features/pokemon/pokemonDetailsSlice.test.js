import reducer, {
  fetchPokemonDetails,
  closeModal,
} from './pokemonDetailsSlice';

describe('pokemonDetailsSlice', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      data: null,
      status: 'idle',
      error: null,
      isOpen: false,
    });
  });

  it('should handle closeModal', () => {
    const prevState = {
      data: { name: 'bulbasaur' },
      status: 'succeeded',
      error: null,
      isOpen: true,
    };
    expect(reducer(prevState, closeModal())).toEqual({
      data: null,
      status: 'idle',
      error: null,
      isOpen: false,
    });
  });
});
