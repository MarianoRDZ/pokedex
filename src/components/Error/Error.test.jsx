import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Error from './Error';

describe('Error', () => {
  it('should display the error message passed via props', () => {
    render(<Error error={'No se pudo cargar el Pokemon'} />);
    expect(
      screen.getByText(/No se pudo cargar el Pokemon/i)
    ).toBeInTheDocument();
  });
});
