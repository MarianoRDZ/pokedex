import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from './Card';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { openModal } from '../../features/pokemon/pokemonModalSlice';
import { VARIANT } from '../Sprite/Sprite';
import TypePill from '../TypePill/TypePill';

const mockStore = configureStore([]);

const mockPokemon = {
  id: '025',
  name: 'pikachu',
  sprite: 'https://pokeapi.co/media/sprites/pokemon/25.png',
  types: [{ type: { name: 'electric' } }],
};

describe('Card', () => {
  it('should render the Pokemon name, ID and image', () => {
    const store = mockStore({});

    render(
      <Provider store={store}>
        <Card role="article" aria-label={`Pokemon: ${mockPokemon.name}`}>
          <Card.Id>#{mockPokemon.id}</Card.Id>
          <Card.Image
            src={mockPokemon.sprite}
            alt={mockPokemon.name}
            variant={VARIANT.sm}
          />
          <Card.Name>{mockPokemon.name}</Card.Name>
        </Card>
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
        <Card
          role="article"
          aria-label={`Pokemon: ${mockPokemon.name}`}
          onClick={() => store.dispatch(openModal(mockPokemon))}
        >
          <Card.Id>#{mockPokemon.id}</Card.Id>
          <Card.Image
            src={mockPokemon.sprite}
            alt={mockPokemon.name}
            variant={VARIANT.sm}
          />
          <Card.Name>{mockPokemon.name}</Card.Name>
        </Card>
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
        <Card
          role="article"
          aria-label={`Pokemon: ${multiTypePokemon.name}`}
          onClick={() => store.dispatch(openModal(multiTypePokemon))}
        >
          <Card.Id>#{multiTypePokemon.id}</Card.Id>
          <Card.Image
            src={multiTypePokemon.sprite}
            alt={multiTypePokemon.name}
            variant={VARIANT.sm}
          />
          <Card.Name>{multiTypePokemon.name}</Card.Name>
          <Card.Types>
            {multiTypePokemon.types.map((typeObj, index) => (
              <TypePill key={index} type={typeObj.type} size="sm" />
            ))}
          </Card.Types>
        </Card>
      </Provider>
    );

    expect(screen.getByText(/electric/i)).toBeInTheDocument();
    expect(screen.getByText(/flying/i)).toBeInTheDocument();
  });
});
