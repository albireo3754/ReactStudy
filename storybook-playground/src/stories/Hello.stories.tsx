import Hello, { IProps } from "./Hello";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Custom/Hello2", // 스토리북의 그룹 / 컴포넌트이름
  component: Hello, // 문서화할 컴포넌트
  //애드온
} as Meta;

const Template: Story<IProps> = (args) => <Hello {...args} />;

export const standard = Template.bind({});
standard.args = {
  name: "Storybook",
  big: false,
};

export const big = Template.bind({});
big.args = {
  name: "big",
  big: true,
};
