import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Icon, { Props, ICON } from "./index";

const Template: Story<Props> = (props) => <Icon {...props} />;

export default {
  title: "Atoms/Icon",
  component: Icon,
} as Meta;

export const Default = Template.bind({});
Default.args = {
  icon: ICON.TWITTER,
};
