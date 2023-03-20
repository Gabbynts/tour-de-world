import React from 'react';
import { render } from '@testing-library/react';
import Home from '@/pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  test('renders page title', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Tour De World')).toBeInTheDocument();
  });

  test('renders all sections', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('hero')).toBeInTheDocument();
    expect(getByTestId('about')).toBeInTheDocument();
    expect(getByTestId('service')).toBeInTheDocument();
  });
});
