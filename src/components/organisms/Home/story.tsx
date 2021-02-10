import React from "react";
import { Provider } from "react-redux";
import { Story, Meta } from "@storybook/react/types-6-0";

import Home from "./index";
import store from "../../../redux/store";

const Template: Story = () => <Home />;

export default {
  title: "Organisms/Home",
  component: Home,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as Meta;

export const Default = Template.bind({});
