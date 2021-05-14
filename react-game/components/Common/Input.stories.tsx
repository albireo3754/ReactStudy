import { Meta, Story } from '@storybook/react';
import { IProps } from './Button';
import Input from './Input';

export default {
  title: 'Common/Input',
  component: Input,
} as Meta;

const Template: Story = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};
