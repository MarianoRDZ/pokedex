import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TypePill from './TypePill';

describe('TypePill', () => {
  const mockType = { name: 'fire' };

  it('should apply the correct size props (sm)', () => {
    render(<TypePill type={mockType} size="sm" />);
    const pill = screen.getByText('fire').parentElement;
    const text = screen.getByText('fire');

    const pillStyles = window.getComputedStyle(pill);
    const textStyles = window.getComputedStyle(text);

    expect(pillStyles.height).toBe('20px');
    expect(textStyles.fontSize).toBe('0.75rem');
  });

  it('should apply the correct size props (xl)', () => {
    render(<TypePill type={mockType} size="xl" />);
    const pill = screen.getByText('fire').parentElement;
    const text = screen.getByText('fire');

    const pillStyles = window.getComputedStyle(pill);
    const textStyles = window.getComputedStyle(text);

    expect(pillStyles.height).toBe('30px');
    expect(textStyles.fontSize).toBe('1rem');
  });
});
