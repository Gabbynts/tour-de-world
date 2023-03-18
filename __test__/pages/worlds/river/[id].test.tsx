import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render, screen } from '@testing-library/react';
import PhotoPage from '@/pages/worlds/river/[id]';
import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockRouter = {
  query: {
    id: 'abc123',
  },
};

jest.mock('@/pages/api/unsplash', () => ({
  getDetailsPhoto: jest.fn(() =>
    Promise.resolve({
      id: 'abc123',
      user: 'Test User',
      urls: {
        regular: '/test.jpg',
      },
      alt_description: 'Test Photo',
      date: '2022-03-18',
    })
  ),
}));    

describe('PhotoPage', () => {
  let queryClient: QueryClient;

  beforeAll(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    queryClient = new QueryClient();
  });

  it('should render photo details after loading data', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <PhotoPage />
      </QueryClientProvider>
    );

    const findByTextContent = async (content:string) => {
        const elements = await screen.findAllByText((text, element) => {
          return element?.textContent === content;
        });
        if (elements.length > 0) {
          return elements[0];
        }
        throw new Error(`Unable to find element with text: ${content}`);
      };
      
      const photoDesc = await findByTextContent('Test Photo');
      expect(photoDesc).toBeInTheDocument();

      const photoDate = await findByTextContent('2022-03-18');
      expect(photoDate).toBeInTheDocument();
    
  });
});



//   it('should render loading spinner while loading data', () => {
//     render(
//       <QueryClientProvider client={queryClient}>
//         <PhotoPage />
//       </QueryClientProvider>
//     );

//     expect(screen.getByTestId('loader')).toBeInTheDocument();
//   });

//   it('should render error message if there is an error fetching data', async () => {
//     (useRouter as jest.Mock).mockReturnValueOnce({ query: { id: null } });

//     render(
//       <QueryClientProvider client={queryClient}>
//         <PhotoPage />
//       </QueryClientProvider>
//     );

//     const errorMessage = await screen.findByText('Error:');
//     expect(errorMessage).toBeInTheDocument();
//   });
