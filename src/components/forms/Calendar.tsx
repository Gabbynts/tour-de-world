import React from "react";
import get from 'lodash.get';
import { Controller, RegisterOptions, useForm, useFormContext, } from "react-hook-form";
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  id: string;
  label: string;
  defaultValue?: Date | null;
  validation?: RegisterOptions;
  placeHolder: string;
} & Omit<ReactDatePickerProps, 'onChange'>

const Calendar = ({
  id,
  label,
  placeHolder,
  defaultValue,
  validation,
}: Props) => {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  const error = get(errors, id);

  return (
    <Controller
      control={control}
      name={id}
      defaultValue={defaultValue}
      rules={validation}
      render={({ field: { onChange, onBlur, value } }) => (
        <div className="w-full">
          {label}
          <ReactDatePicker
            className='h-[45px] w-full pl-4 rounded-[22px] bg-[#260D45] text-sm border border-[#d6b6ff]'
            selected={value ? new Date(value) : undefined}
            onChange={onChange}
            onBlur={onBlur}
            dateFormat="dd/MM/yyyy"
            placeholderText={placeHolder}
          />
                  {error && (
        <p className='text-error'>
          {error?.message?.toString()}
        </p>
      )}
        </div>
      )}
    />
  );
};

export default Calendar;

