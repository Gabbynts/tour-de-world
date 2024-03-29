import React, { ReactNode } from 'react';
import clsx from 'clsx';

type ColorVariant = 'primary' | 'secondary' | 'light' | 'dark';
type SizeVariant = 'h' | 'b' | 'c' | 'hd' | 't' | 's';

type TextProps = {
  sizeVariant?: SizeVariant;
  colorVariant?: ColorVariant;
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const Typography = ({
  sizeVariant= 'c',
  colorVariant = 'primary',
  children,
  className,
  ...props
}: TextProps) => {
  return (
    <p className={clsx(        
        [
        sizeVariant === 'h' && ['text-[50px] md:text-[50px] lg:text-[65px]'],
        sizeVariant === 'b' && ['text-[15px] md:text-[20px] lg:text-[25px]'],
        sizeVariant === 'hd' && ['text-[20px] font-semibold'],
        sizeVariant === 's' && ['text-sm md:text-xl'],
        sizeVariant === 'c' && ['text-[30px] md:text-[40px] lg:text-[50px]'],

      ],
      [
        colorVariant === 'primary' && ['text-[#010101] dark:text-[#FFF6FF]'],
        colorVariant === 'secondary' && ['text-[#414342] dark:text-[#1C0737]'],
        colorVariant === 'light' && ['text-white'],
        colorVariant === 'dark' && ['text-gray-600'],
      ], 
      className)} 
      {...props}
    >
      {children}
    </p>
  );
};

export default Typography;
