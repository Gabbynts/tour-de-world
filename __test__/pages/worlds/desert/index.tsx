import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from "react-query";
import '@testing-library/jest-dom';
import Home from '@/pages/worlds/desert/index';
import { getPhotos } from '@/pages/api/unsplash';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';

// const server = setupServer(
//   rest.get('/api/unsplash', (req, res, ctx) => {
//     return res(
//       ctx.json([
//         { id: '1', url: 'https://example.com/image1.jpg' },
//         { id: '2', url: 'https://example.com/image2.jpg' },
//         { id: '3', url: 'https://example.com/image3.jpg' },
//       ])
//     );
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// test('renders the Home component', async () => {
//   render(<Home />);

//   // Verify that the loader is displayed while the data is being fetched.
//   const loader = screen.getByRole('progressbar');
//   expect(loader).toBeInTheDocument();

//   // Wait for the data to be loaded and the loader to disappear.
//   const images = await screen.findAllByRole('img');
//   expect(loader).not.toBeInTheDocument();

//   // Verify that the images are displayed.
//   expect(images).toHaveLength(6); // 3 images on each slider.
// });


  // test('renders page title', () => {
  //   const { getByText } = render(<Home />);
  //   expect(getByText('Desert | Tour De World')).toBeInTheDocument();
  // });