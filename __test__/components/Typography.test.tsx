import React from 'react';
import { render } from '@testing-library/react';
import Typography from '@/components/Typography';
import '@testing-library/jest-dom';

describe('Text', () => {
  it('renders the text', () => {
    const { getByText } = render(<Typography>Hello world</Typography>);
    expect(getByText('Hello world')).toBeInTheDocument();
  });

  it('applies the sizeVariant props', () => {
    const { getByText } = render(
      <Typography sizeVariant='h'>Hello world</Typography>
    );
    expect(getByText('Hello world')).toHaveClass(
      'text-[50px] md:text-[50px] lg:text-[65px]'
    );
  });

  it('applies the colorVariant props', () => {
    const { getByText } = render(
      <Typography colorVariant='primary'>Hello world</Typography>
    );
    expect(getByText('Hello world')).toHaveClass(
      'text-[#010101] dark:text-[#FFF6FF]'
    );
  });

  it('applies additional className props', () => {
    const { getByText } = render(
      <Typography className='extraClass'>Hello world</Typography>
    );
    expect(getByText('Hello world')).toHaveClass('extraClass');
  });
});
