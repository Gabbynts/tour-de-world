import Input from "@/components/forms/Input"
import { fireEvent, render } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';
import { getByLabelText } from '@testing-library/dom';
import '@testing-library/jest-dom';

import React from 'react';

// describe('Input component', () => {

//   const Wrapper = ({ children }: { children: React.ReactNode }) => {
//     const methods = useForm();
//     return <FormProvider {...methods}>{children}</FormProvider>;
//   };
  
//   it('should render input with label', () => {
//     const { container } = render(
//       <Wrapper>
//     <Input label="Username" id="username" validation={{}} />
//     </Wrapper>);
//     const label = getByLabelText(container, 'Username');
//     const input = container.querySelector('#username');
//     expect(label).toBeDefined();
//     expect(input).toBeDefined();
//   });
// });



// describe('Input component', () => {
//   test('renders input element with label', () => {
//     render(
//       <Input
//         label="First Name"
//         id="firstName"
//         validation={{ required: 'This field is required' }}
//       />
//     );

//     const inputElement = screen.getByLabelText('First Name');

//     expect(inputElement).toBeInTheDocument();
//   });
// });



// describe('Input', () => {
//   const validation = { required: 'This field is required' };
//   const Wrapper = ({ children }: { children: React.ReactNode }) => {
//     const methods = useForm();
//     return <FormProvider {...methods}>{children}</FormProvider>;
//   };

//   it('renders the label and placeholder correctly', () => {
//     render(
//       <Wrapper>
//         <Input label="Name" id="name" placeholder="Enter your name" validation={validation} />
//       </Wrapper>
//     );
//     expect(screen.getByText('Name')).toBeInTheDocument();
//     expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
//   });

//   it('shows an error message when the input is invalid', async () => {
//     render(
//       <Wrapper>
//         <Input label="Email" id="email" validation={{ required: 'Email is required' }} />
//       </Wrapper>
//     );
//     const input = screen.getByLabelText('Email');
//     fireEvent.blur(input);
//     const error = await screen.findByText('Email is required');
//     expect(error).toBeInTheDocument();
//   });

//   it('updates the form value when the user types in the input', () => {
//     render(
//       <Wrapper>
//         <Input label="Name" id="name" validation={validation} />
//       </Wrapper>
//     );
//     const input = screen.getByLabelText('Name');
//     fireEvent.change(input, { target: { value: 'John Doe' } });
//     expect(input).toHaveValue('John Doe');
//   });
// });
