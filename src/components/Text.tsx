import React, { ReactNode } from 'react';
import clsx from 'clsx';

type ColorVariant = 'primary' | 'secondary' | 'light' | 'dark';
type SizeVariant = 'h' | 'b' | 'c' ;

type TextProps = {
  sizeVariant?: SizeVariant;
  colorVariant?: ColorVariant;
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>;



const Text: React.FC<TextProps> = ({
  sizeVariant= 'c',
  colorVariant = 'primary',
  children,
  className,
  ...props
}) => {
  return (
    <p className={clsx(        
        [
        sizeVariant === 'h' && ['text-[50px] md:text-[80px] font-semibold md:font-bold'],
        sizeVariant === 'b' && ['text-[15px] md:text-[40px]'],
        sizeVariant === 'c' && ['font-extralight text-[24px] md:text-[50px]'],

      ],
      [
        colorVariant === 'primary' && ['text-[#3b2e27]'],
        colorVariant === 'secondary' && ['text-[#815a45]'],
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

export default Text;
