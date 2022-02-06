import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, Props } from '../../src/components/Checkbox';

const meta: Meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Label text',
    },
    name: {
      defaultValue: 'myCheckbox',
    },
    isChecked: {
      defaultValue: false,
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
