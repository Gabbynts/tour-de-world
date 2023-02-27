import React, { useCallback, useEffect, useState } from "react";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import Dropzone, { DropzoneState } from "react-dropzone";
import get from 'lodash.get';

interface Props {
  id: string;
  label: string;
  defaultValue?: any;
  rules?: RegisterOptions;
  validation?: Record<string, unknown>
}

const PhotoInput= ({
  id,
  label,
  defaultValue = null,
  validation,
  rules = {},
}: Props) => {

  const {
    control,
    getValues,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, id);

  const [previewUrl, setPreviewUrl] = useState<string | undefined>(defaultValue);

  useEffect(() => {
    if (defaultValue) {
      setPreviewUrl(defaultValue);
    }
  }, [defaultValue]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };

    reader.readAsDataURL(file);
  }, []);

  return (
    <Controller
      control={control}
      name={id}
      defaultValue={defaultValue}
      rules={validation}
      render={({ field }) => (
        <div className="w-full">
            <label>{label}</label>
          <Dropzone
            onDrop={onDrop}
            multiple={false}
            maxSize={1048576}
          >
            {({
              getRootProps,
              getInputProps,
              isDragActive,
              isDragAccept,
              isDragReject,
            }: DropzoneState) => (
              <div
                {...getRootProps()}
                className={`w-full h-64 flex items-center justify-center border-2 border-dashed rounded-lg ${
                  isDragActive
                    ? "border-blue-500"
                    : isDragAccept
                    ? "border-green-500"
                    : isDragReject
                    ? "border-red-500"
                    : "border-[#d6b6ff]"
                }`}
              >
                <input {...field} {...getInputProps()} />
                {previewUrl ? (
                  <img
                    className="w-full h-64 object-cover rounded-lg"
                    src={previewUrl}
                    alt="Preview"
                  />
                ) : (
                  <p className="text-gray-400">
                    {isDragActive
                      ? "Drop the files here ..."
                      : "Drag and drop an image here"}
                  </p>
                  
                )}
                                {error && (
                <p className='text-error'>
                  {error?.message?.toString()}
                </p>
              )}
              </div>
            )}
          </Dropzone>
        </div>
      )}
    />
  );
};

export default PhotoInput;
