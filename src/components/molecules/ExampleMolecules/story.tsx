import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import ExampleMolecules from "./index";

const Template: Story = () => <ExampleMolecules />;

export default {
  title: "Molecules/ExampleMolecules",
  component: ExampleMolecules,
} as Meta;

export const Default = Template.bind({});
