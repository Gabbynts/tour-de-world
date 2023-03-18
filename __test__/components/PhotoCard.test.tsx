import { render, screen } from '@testing-library/react';
import PhotoCard from '@/components/PhotoCard';
import '@testing-library/jest-dom';

// import { NEXT_IMG_URL, IMG_SIZE_URL } from '__test__/constant/data';

test('renders a PhotoCard with the correct image and title', () => {
    render(
      <PhotoCard
        id="test"
        link="/test"
        imgUrl="/test.jpg"
        title="Test PhotoCard"
        index={0}
        active="test"
        handleClick={jest.fn()}
      />
    );

    const NEXT_IMG_URL = '/_next/image?url=%2F'
    const IMG_SIZE_URL = '&w=3840&q=75'
  
    const img = screen.getByAltText('Test PhotoCard');
    expect(img).toHaveAttribute('src', `${NEXT_IMG_URL}test.jpg${IMG_SIZE_URL}`);
  
    const title = screen.getByText('Test PhotoCard');
    expect(title).toBeInTheDocument();
  });

  //text untuk photocard