import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('should render the name of the Pokemon', () => {
    render(<Card name="pikachu" />);
    expect(screen.getByText('pikachu')).toBeInTheDocument();
  });

  it('should have the proper aria-label', () => {
    render(<Card name="charmander" />);
    expect(screen.getByRole('article')).toHaveAttribute(
      'aria-label',
      'Pokemon: charmander'
    );
  });
});
