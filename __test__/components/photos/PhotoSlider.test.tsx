import { render, screen } from '@testing-library/react';
import PhotoSliderLeft from '@/components/photos/PhotoSliderLeft';
import '@testing-library/jest-dom';

describe('PhotoSliderLeft', () => {
  it('renders a slider with the correct images', () => {
    const photos = [
      {
        id: '1',
        urls: {
          regular: '/test1.jpg',
        },
        alt_description: 'Test Photo 1',
      },
      {
        id: '2',
        urls: {
          regular: '/test2.jpg',
        },
        alt_description: 'Test Photo 2',
      },
    ];

    render(<PhotoSliderLeft photos={photos} />);

    const NEXT_IMG_URL = '/_next/image?url=%2F';
    const IMG_SIZE_URL = '&w=640&q=75';

    // Assert that the component renders with the correct images
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute(
      'src',
      `${NEXT_IMG_URL}test1.jpg${IMG_SIZE_URL}`
    );
    expect(images[0]).toHaveAttribute('alt', 'Test Photo 1');
    expect(images[1]).toHaveAttribute(
      'src',
      `${NEXT_IMG_URL}test2.jpg${IMG_SIZE_URL}`
    );
    expect(images[1]).toHaveAttribute('alt', 'Test Photo 2');
  });
});
