import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from './Card';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { openModal } from '../../features/pokemon/pokemonModalSlice';

const mockStore = configureStore([]);

const mockPokemon = {
  id: 25,
  name: 'pikachu',
  sprite: 'https://pokeapi.co/media/sprites/pokemon/25.png',
  types: [{ type: { name: 'electric' } }],
};

describe('Card', () => {
  it('should render the Pokemon name, ID and image', () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <Card pokemon={mockPokemon} />
      </Provider>
    );

    expect(screen.getByText('pikachu')).toBeInTheDocument();
    expect(screen.getByText('#025')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', mockPokemon.sprite);
    expect(screen.getByRole('article')).toHaveAttribute(
      'aria-label',
      'Pokemon: pikachu'
    );
  });

  it('should dispatch openModal with the pokemon when clicked', () => {
    const store = mockStore({});
    store.dispatch = vi.fn();

    render(
      <Provider store={store}>
        <Card pokemon={mockPokemon} />
      </Provider>
    );

    const card = screen.getByRole('article');
    fireEvent.click(card);

    expect(store.dispatch).toHaveBeenCalledWith(openModal(mockPokemon));
  });

  it('should render a TypePill for each pokemon type', () => {
    const store = mockStore({});
    const multiTypePokemon = {
      ...mockPokemon,
      types: [{ type: { name: 'electric' } }, { type: { name: 'flying' } }],
    };

    render(
      <Provider store={store}>
        <Card pokemon={multiTypePokemon} />
      </Provider>
    );

    const typePills = screen.getAllByText(/electric|flying/i);
    expect(typePills.length).toBe(2);
  });
});
