import React from 'react';
import { render, screen } from '@testing-library/react';
import Steps from '@/components/Steps';
import '@testing-library/jest-dom';

describe('Steps', () => {
  it('renders the step number and text', () => {
    render(<Steps number='1' text='Testing text' />);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Testing text')).toBeInTheDocument();
  });
});
