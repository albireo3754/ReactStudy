import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { IProps } from './Button';

export default {
  title: 'Header/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<IProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'hello button',
};

export const Width300 = Template.bind({});
Width300.args = {
  width: '300px',
};

export const Height300 = Template.bind({});
Height300.args = {
  height: '300px',
  children: 'hi',
};
