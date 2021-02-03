import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import ExampleAtom, { Props } from "./index";

const Template: Story<Props> = (props) => <ExampleAtom {...props} />;

export default {
  title: "Atoms/ExampleAtom",
  component: ExampleAtom,
} as Meta;

export const Default = Template.bind({});
Default.args = {
  text: "default",
};
