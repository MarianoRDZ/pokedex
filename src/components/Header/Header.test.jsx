import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const store = mockStore({});

describe('Header', () => {
  it('should render the title and subtitle', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(screen.getByText('Pokédex')).toBeInTheDocument();
    expect(
      screen.getByText('Descubrí los 151 pokemon originales!')
    ).toBeInTheDocument();
  });

  it('should render the Searchbar component', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
});
