import { render, screen , fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm, FormProvider } from 'react-hook-form';
import TextArea from '@/components/forms/TextArea';
import '@testing-library/jest-dom';

import { act } from 'react-dom/test-utils';

function TestComponent() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <TextArea label='Test Label' id='testId' />
    </FormProvider>
  );
}

function TestComponent2() {
  const methods = useForm();
  const mockValidation = { required: 'Required' };
  const mockSubmit = jest.fn();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(mockSubmit)}>
        <TextArea label="Test Label" id="testId" validation={{ required: true }} />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
}

describe('TextArea component', () => {
  it('renders without errors', () => {
    render(<TestComponent />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('displays validation error message when the form is submitted with invalid input', async () => {
    render(<TestComponent2 />);
    const error = new Error('Test error message');

    const textarea = screen.getByTestId('Label');
    const errorMessage = screen.getByTestId("error-message");
    const submitButton = screen.getByRole('button', { name: 'Submit' });
  
    await act(async () => {
      // Submit form tampa input
      fireEvent.click(submitButton);
    });
    
    
    expect(errorMessage).toHaveTextContent('Test error message');
  
    // expect(errorMessage).toBeVisible()
  
    await act(async () => {
      fireEvent.change(textarea, { target: { value: 'valid input' } });
      fireEvent.click(submitButton);
    });

    expect(errorMessage).not.toBeVisible()
  });

});
