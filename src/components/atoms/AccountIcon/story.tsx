import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import AccountIcon from "./index";

const Template: Story = () => <AccountIcon />;

export default {
  title: "Atoms/AccountIcon",
  component: AccountIcon,
} as Meta;

export const Default = Template.bind({});
