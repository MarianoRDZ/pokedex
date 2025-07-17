import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Searchbar from '../Searchbar/Searchbar';

const mockStore = configureStore([]);
const store = mockStore({});

describe('Header', () => {
  it('should render the title and subtitle', () => {
    render(
      <Provider store={store}>
        <Header>
          <Header.Title>Pokedex</Header.Title>
          <Header.Subtitle>
            Descubrí los 151 pokemon originales!
          </Header.Subtitle>
          <Header.Searchbar>
            <Searchbar />
          </Header.Searchbar>
        </Header>
      </Provider>
    );

    expect(screen.getByText('Pokedex')).toBeInTheDocument();
    expect(
      screen.getByText('Descubrí los 151 pokemon originales!')
    ).toBeInTheDocument();
  });

  it('should render the Searchbar component', () => {
    render(
      <Provider store={store}>
        <Header>
          <Header.Title>Pokedex</Header.Title>
          <Header.Subtitle>
            Descubrí los 151 pokemon originales!
          </Header.Subtitle>
          <Header.Searchbar>
            <Searchbar />
          </Header.Searchbar>
        </Header>
      </Provider>
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
});
