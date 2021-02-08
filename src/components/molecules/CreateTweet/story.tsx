import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Story, Meta } from "@storybook/react/types-6-0";

import CreateTweet from "./index";

const Template: Story = () => <CreateTweet />;

export default {
  title: "Molecules/CreateTweet",
  component: CreateTweet,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as Meta;

export const Default = Template.bind({});
