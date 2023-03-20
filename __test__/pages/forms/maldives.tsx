import Home from '@/pages/forms/maldives';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Home', () => {
  test('renders page title', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Maldives | Tour De World')).toBeInTheDocument();
  });
  //   it('submits the form when the submit button is clicked', async () => {
  //     const onSubmit = jest.fn();
  //     render(<Home onSubmit={onSubmit} />);

  //     const submitButton = screen.getByText('Submit');
  //     fireEvent.click(submitButton);

  //     expect(onSubmit).toHaveBeenCalled();
  //   });
});
