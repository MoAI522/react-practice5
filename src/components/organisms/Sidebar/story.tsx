import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Provider } from "react-redux";

import Sidebar from "./index";
import store from "../../../redux/store";

const Template: Story = () => <Sidebar />;

export default {
  title: "Organisms/Sidebar",
  component: Sidebar,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Router>
          <div style={{ height: "400px" }}>
            <Story />
          </div>
        </Router>
      </Provider>
    ),
  ],
} as Meta;

export const Default = Template.bind({});
