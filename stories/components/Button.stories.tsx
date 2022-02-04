import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, Props } from '../../src/components/Button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Default text',
    },
    variant: {
      defaultValue: 'primary',
    },
  },
};

// IMPORTANT: do not export const meta or storybook will yell at you and not display your component!
export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'I am secondary',
  onClick: action('secondary click'),
};
