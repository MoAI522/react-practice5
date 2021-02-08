import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Story, Meta } from "@storybook/react/types-6-0";

import TweetAccount, { Props } from "./index";

const Template: Story<Props> = (props) => <TweetAccount {...props} />;

export default {
  title: "Atoms/TweetAccount",
  component: TweetAccount,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as Meta;

export const Default = Template.bind({});
Default.args = {
  href: "/",
  src: "./images/icon.jpg",
};
