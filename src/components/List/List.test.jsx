import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import List from './List';

const mockStore = configureStore([]);

describe('List', () => {
  it('should show a "Loading" message', () => {
    const store = mockStore({
      pokemon: {
        pokemons: [],
        status: 'loading',
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <List />
      </Provider>
    );

    expect(screen.getByText('Loading Pokémons...')).toBeInTheDocument();
  });

  /*it('muestra mensaje de error si hay un error', () => {
    const store = mockStore({
      pokemon: {
        pokemons: [],
        status: 'failed',
        error: 'Error de red',
      },
    });

    render(
      <Provider store={store}>
        <List />
      </Provider>
    );

    expect(screen.getByText(/Error: Error de red/i)).toBeInTheDocument();
  });

  it('muestra lista de pokémons si está cargado', () => {
    const store = mockStore({
      pokemon: {
        pokemons: [{ name: 'bulbasaur' }, { name: 'charmander' }],
        status: 'succeeded',
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <List />
      </Provider>
    );

    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('charmander')).toBeInTheDocument();
  });*/
});
