import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../../src/components/Button';
import { action } from '@storybook/addon-actions';

export const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Default text',
    },
  },
};

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'I am secondary',
  onClick: action('secondary click'),
};
