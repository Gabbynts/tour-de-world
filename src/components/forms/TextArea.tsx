import React from 'react';
import {  RegisterOptions, useFormContext } from 'react-hook-form';
import get from 'lodash.get';

interface Props {
  label: string;
  id: string;
  className?: string;
  validation?: RegisterOptions;
}

function TextArea({ label, id, validation }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, id);

  return (
    <div  data-testid="Label">
      <div>{label}</div>
      <div className='pt-2'>
        <textarea
          {...register(id, validation)}
          name={id}
          id={id}
          rows={8}
          className='w-full pl-4 rounded-[22px] bg-[#260D45] text-sm border border-[#d6b6ff] p-4'
        />
                {error && (
        <p className='text-error' data-testid="error-message">
          {error?.message?.toString()}
        </p>
      )}
      </div>
    </div>
  );
}

export default TextArea;
