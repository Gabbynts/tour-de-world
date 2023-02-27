import React, { HTMLInputTypeAttribute } from 'react';
import get from 'lodash.get';
import { RegisterOptions, useForm, useFormContext } from 'react-hook-form';

interface Props {
  label?: string;
  placeholder?: string;
  validation: RegisterOptions;
  id: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
}

function Input({
  label,
  placeholder,
  validation,
  id,
  type = 'text',
  className,
}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, id);
  return (
    <div>
      <div className='text-[16px]'>{label}</div>
      <div className='pt-2'>
        <input
          {...register(id, validation)}
          name={id}
          id={id}
          placeholder={placeholder}
          type={type}
          className={
            `h-[45px] w-full pl-4 rounded-[22px] bg-[#260D45] text-sm border border-[#d6b6ff]
                            ${className}`}
        />
        {error && (
        <p className='text-error'>
          {error?.message?.toString()}
        </p>
      )}
      </div>
    </div>
  );
}

export default Input;
