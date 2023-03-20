import React from 'react';
import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormProvider, useForm } from 'react-hook-form';
import Calendar from '@/components/forms/Calendar';
import '@testing-library/jest-dom/extend-expect';

describe('Calendar', () => {
    it('renders correctly', () => {
      const { container } = render(
        <Calendar id="test-id" label="Test Label" placeHolder="Test Placeholder" />
      );
  
      expect(container.firstChild).toMatchSnapshot();
    });
  });