import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import PokemonModal from './PokemonModal';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('Modal', () => {
  it('should not render when isOpen is false', () => {
    const store = mockStore({
      pokemonModal: {
        isOpen: false,
        selectedPokemon: null,
      },
    });

    render(
      <Provider store={store}>
        <PokemonModal />
      </Provider>
    );

    expect(screen.queryByText(/HP/i)).not.toBeInTheDocument();
  });
});
