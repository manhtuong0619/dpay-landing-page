import React from 'react';

import { cn } from '@/libs/utils/cn';
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { children, className, ...restProps } = props;
  return (
    <button
      className={cn(
        `flex items-center justify-center whitespace-nowrap rounded bg-primary px-4 py-2 text-sm font-semibold text-white`,
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
