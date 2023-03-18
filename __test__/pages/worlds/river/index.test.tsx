import { render, screen, act } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from '@/pages/worlds/river/index';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';


fetchMock.enableMocks();

describe('Home component', () => {
  let queryClient: QueryClient;
 
  beforeAll(() => {
    queryClient = new QueryClient();
  });
 
  it('renders photos when data is loaded', async () => {
    const mockData = [
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
 
    fetchMock.mockResponseOnce(JSON.stringify(mockData), { headers: { 'Content-type': 'application/json' } });

    const queryClient = new QueryClient();
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      );
    });

    const photos = await screen.findAllByRole('img');
    expect(photos).toHaveLength(mockData.length + 1);
  });
});

//mocking test bisa dibuat terpisah

    // mockData.forEach((photo, index) => {
    // const img = photos[index];
    // expect(img).toHaveAttribute('src', photo.urls.regular);
    // expect(img).toHaveAttribute('alt', photo.alt_description);
    // });

 
    // const photo1 = await screen.findByAltText('Test Photo 1');
    // expect(photo1).toBeInTheDocument();
 
    // const photo2 = await screen.findByAltText('Test Photo 2');
    // expect(photo2).toBeInTheDocument();

    // const sliderRight = screen.getByTestId('slider-right');
    // const sliderRightImages = sliderRight.querySelectorAll('img');
    // expect(sliderRightImages).toHaveLength(mockData.length);
  
    // sliderRightImages.forEach((img, index) => {
    //   expect(img).toHaveAttribute('src', mockData[index].urls.regular);
    //   expect(img).toHaveAttribute('alt', `Test Photo ${index + 1}`);
    // });
 
//   it('renders loading spinner when data is loading', () => {

//     render(
//       <QueryClientProvider client={queryClient}>
//         <Home />
//       </QueryClientProvider>
//     );
 
//     const spinner = screen.getByRole('progressbar');
//     expect(spinner).toBeInTheDocument();
//   });
 
//   it('renders error message when there is an error', async () => {
//     const errorMessage = 'Failed to fetch data';
 
//     jest.spyOn(console, 'error').mockImplementation(() => {});
//     jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error(errorMessage));
 
//     await act(async () => {
//         render(
//           <QueryClientProvider client={queryClient}>
//             <Home />
//           </QueryClientProvider>
//         );
//       });
 
//     const error = await screen.findByText(`Error: ${errorMessage}`);
//     expect(error).toBeInTheDocument();
//   });