import { render, screen, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import PokemonModal from './PokemonModal';
import { describe, it, expect, vi } from 'vitest';

const selectedPokemonMock = {
  id: 25,
  name: 'pikachu',
  sprite: 'https://url.com/sprite.png',
  types: [{ type: { name: 'electric' } }],
  stats: {
    hp: { base_stat: 35, stat: { name: 'hp' } },
    attack: { base_stat: 55, stat: { name: 'attack' } },
    defense: { base_stat: 40, stat: { name: 'defense' } },
  },
};

const mockStore = configureStore([]);

const renderWithStore = (store, props = {}) =>
  render(
    <Provider store={store}>
      <PokemonModal {...props}>
        <PokemonModal.Header />
        <PokemonModal.Body />
      </PokemonModal>
    </Provider>
  );

describe('PokemonModal', () => {
  it('should show when isOpen is true and there is one pokemon selected', () => {
    const store = mockStore({
      pokemonModal: {
        isOpen: true,
        selectedPokemon: selectedPokemonMock,
      },
    });

    renderWithStore(store);

    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
    expect(screen.getByText(/#025/)).toBeInTheDocument();
  });

  it('should NOT show when isOpen is false', () => {
    const store = mockStore({
      pokemonModal: {
        isOpen: false,
        selectedPokemon: selectedPokemonMock,
      },
    });

    renderWithStore(store);

    expect(screen.queryByText(/pikachu/i)).not.toBeInTheDocument();
  });

  it('should NOT show when there is no pokemon selected', () => {
    const store = mockStore({
      pokemonModal: {
        isOpen: true,
        selectedPokemon: null,
      },
    });

    renderWithStore(store);

    expect(screen.queryByText(/pikachu/i)).not.toBeInTheDocument();
  });
});
