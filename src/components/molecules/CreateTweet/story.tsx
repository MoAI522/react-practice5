import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Provider } from "react-redux";

import CreateTweet from "./index";
import store from "../../../redux/store";

const Template: Story = () => <CreateTweet />;

export default {
  title: "Molecules/CreateTweet",
  component: CreateTweet,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Router>
          <Story />
        </Router>
      </Provider>
    ),
  ],
} as Meta;

export const Default = Template.bind({});
