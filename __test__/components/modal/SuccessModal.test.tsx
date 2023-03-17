import SuccessModal from '@/components/modal/SuccessModal';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';

describe('SuccessModal', () => {
  test('renders success message', () => {
    render(<SuccessModal message='Test success message' onClose={() => {}} />);
    const successMessage = screen.getByText(/Success!/i);
    expect(successMessage).toBeInTheDocument();
  });

  test('calls onClose when OK button is clicked', async () => {
    const onClose = jest.fn();
    render(<SuccessModal message='Test success message' onClose={onClose} />);
    const okButton = screen.getByText(/OK/i);
    await act(async () => {
      fireEvent.click(okButton);
    });
    expect(onClose).toHaveBeenCalled();
  });
});
