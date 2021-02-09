import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Home from "./index";

const Template: Story = () => <Home />;

export default {
  title: "Organisms/Home",
  component: Home,
} as Meta;

export const Default = Template.bind({});
