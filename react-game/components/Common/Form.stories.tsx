import { Meta, Story } from '@storybook/react';
import Form from './Form';

export default {
  title: 'Common/Form',
  component: Form,
} as Meta;

const Template: Story = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {};
