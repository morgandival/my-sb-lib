import React, { FC, HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLInputElement> {
  /** Label text */
  children: ReactNode;
  /** Checkbox ID */
  name: string;
  /** Checked state */
  isChecked: boolean;
}

export const Checkbox: FC<Props> = ({
  children = 'Some text',
  name = 'checkbox',
  isChecked = false,
  ...props
}: Props) => {
  return (
    <>
      <input
        id={name}
        name={name}
        type="checkbox"
        checked={isChecked}
        {...props}
      />
      <label style={{ paddingLeft: '10px' }}>{children}</label>
    </>
  );
};
