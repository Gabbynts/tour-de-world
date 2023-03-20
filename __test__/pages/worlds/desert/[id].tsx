import React from 'react';
import '@testing-library/jest-dom';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { render, screen } from '@testing-library/react';
import { getDetailsPhoto } from '@/pages/api/unsplash';
import PhotoPage from '@/pages/worlds/desert/';

// jest.mock('next/router', () => ({
//   useRouter: jest.fn(),
// }));

// jest.mock('react-query', () => ({
//   useQuery: jest.fn(),
// }));

// jest.mock('@/pages/api/unsplash', () => ({
//   getDetailsPhoto: jest.fn(),
// }));

// describe('PhotoPage', () => {
//   const id = 'abc123';

//   beforeEach(() => {
//     useRouter.mockReturnValue({ query: { id } });
//   });

//   afterEach(() => {
//     jest.resetAllMocks();
//   });

//   it('should render loader when data is loading', () => {
//     useQuery.mockReturnValue({ isLoading: true });

//     render(<PhotoPage />);

//     expect(screen.getByTestId('page_loader')).toBeInTheDocument();
//   });

//   it('should render error message when there is an error', () => {
//     useQuery.mockReturnValue({
//       isLoading: false,
//       isError: true,
//       error: { message: 'Oops, something went wrong.' },
//     });

//     render(<PhotoPage />);

//     expect(screen.getByText('Error: Oops, something went wrong.')).toBeInTheDocument();
//   });

//   it('should render photo details when data is loaded', () => {
//     useQuery.mockReturnValue({
//       isLoading: false,
//       data: {
//         user: 'John Doe',
//         urls: { regular: 'https://example.com/image.jpg' },
//         alt_description: 'A beautiful photo of the desert',
//         date: '2022-01-01',
//       },
//     });

//     render(<PhotoPage />);

//     expect(screen.getByText('John Doe')).toBeInTheDocument();
//     expect(screen.getByAltText('A beautiful photo of the desert')).toBeInTheDocument();
//     expect(screen.getByText('2022-01-01')).toBeInTheDocument();
//   });

//   it('should call getDetailsPhoto with the correct parameters', () => {
//     useQuery.mockReturnValue({ isLoading: false });

//     render(<PhotoPage />);

//     expect(getDetailsPhoto).toHaveBeenCalledWith(id, 't5WxxhORJ7sAw_rEMQVskzTEdzMq4sLKhHWhk99FqSQ');
//   });
// });

    // it('renders the list of desert photos', async () => {
    //     // Create a mock implementation of the getPhotos function
    //     const mockPhotos = [
    //       { id: '1', urls: { thumb: 'https://example.com/image1.jpg' } },
    //       { id: '2', urls: { thumb: 'https://example.com/image2.jpg' } },
    //       { id: '3', urls: { thumb: 'https://example.com/image3.jpg' } },
    //     ];
    //     jest.spyOn(global, 'fetch').mockImplementation(() =>
    //       Promise.resolve({
    //         json: () => Promise.resolve(mockPhotos),
    //       })
    //     );
    
    //     // Render the Home component with a QueryClientProvider
    //     const queryClient = new QueryClient();
    //     render(
    //       <QueryClientProvider client={queryClient}>
    //         <Home />
    //       </QueryClientProvider>
    //     );
    
    //     // Wait for the photos to load
    //     const photos = await screen.findAllByRole('img');
    
    //     // Check that the correct number of photos are rendered
    //     expect(photos.length).toBe(mockPhotos.length);
    
    //     // Check that each photo has the correct source URL
    //     photos.forEach((photo, i) => {
    //       expect(photo).toHaveAttribute('src', mockPhotos[i].urls.thumb);
    //     });
    
    //     // Restore the original implementation of the fetch function
    //     global.fetch.mockRestore();
    //   });
    
    //   it('returns an array of photos', async () => {
    //     const photos = await getPhotos('desert', 9, 1, 't5WxxhORJ7sAw_rEMQVskzTEdzMq4sLKhHWhk99FqSQ');
    //     expect(Array.isArray(photos)).toBe(true);
    //   });
    
    //   it('returns the correct number of photos', async () => {
    //     const numPhotos = 9;
    //     const photos = await getPhotos('desert', numPhotos, 1, 't5WxxhORJ7sAw_rEMQVskzTEdzMq4sLKhHWhk99FqSQ');
    //     expect(photos.length).toBe(numPhotos);
    //   });
    
    //   it('throws an error if the API key is invalid', async () => {
    //     const invalidApiKey = 'invalid-api-key';
    //     await expect(getPhotos('desert', 9, 1, invalidApiKey)).rejects.toThrow();
    //   });

// test('renders page title', () => {
//   const { getByText } = render(<Home />);
//   expect(getByText('Desert | Tour De World')).toBeInTheDocument();
// });
