import React, { FC, HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Button text */
  children: ReactNode;
  /** Select an option */
  variant: 'primary' | 'secondary';
}

/** This is a special button!!! */
export const Button: FC<Props> = ({
  children,
  variant = 'primary',
  ...props
}: Props) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: variant === 'primary' ? 'blue' : 'gray',
        color: 'white',
        border: 'none',
        borderRadius: 100,
        padding: '10px',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
