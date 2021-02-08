import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { Props } from "./index";

const Template: Story<Props> = (props) => <Button {...props} />;

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta;

const commonArgs = {
  text: "テキスト",
  onClick: () => console.log("clicked"),
};

export const S = Template.bind({});
S.args = {
  ...commonArgs,
  size: "s",
};

export const M = Template.bind({});
M.args = {
  ...commonArgs,
  size: "m",
};

export const PrimaryS = Template.bind({});
PrimaryS.args = {
  ...commonArgs,
  size: "s",
  isPrimary: true,
};

export const PrimaryM = Template.bind({});
PrimaryM.args = {
  ...commonArgs,
  size: "m",
  isPrimary: true,
};
