import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Story, Meta } from "@storybook/react/types-6-0";

import Sidebar from "./index";

const Template: Story = () => <Sidebar />;

export default {
  title: "Organisms/Sidebar",
  component: Sidebar,
  decorators: [
    (Story) => (
      <Router>
        <div style={{ height: "400px" }}>
          <Story />
        </div>
      </Router>
    ),
  ],
} as Meta;

export const Default = Template.bind({});
