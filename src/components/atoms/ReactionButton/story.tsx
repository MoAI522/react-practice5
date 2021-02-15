import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Story, Meta } from "@storybook/react/types-6-0";

import ReactionButton, { Props } from "./index";

const Template: Story<Props> = (props) => <ReactionButton {...props} />;

export default {
  title: "Atoms/ReactionButton",
  component: ReactionButton,
  decorators: [
    (Story) => (
      <Router>
        <div style={{ width: "46.25px" }}>
          <Story />
        </div>
      </Router>
    ),
  ],
} as Meta;

const commonArgs = {
  value: 0,
  onClick: () => console.log("reaction button clicked"),
};

export const Reply = Template.bind({});
Reply.args = {
  ...commonArgs,
  type: "reply",
};

export const Retweet = Template.bind({});
Retweet.args = {
  ...commonArgs,
  type: "retweet",
};

export const Favorite = Template.bind({});
Favorite.args = {
  ...commonArgs,
  type: "favorite",
};

export const Number = Template.bind({});
Number.args = {
  ...commonArgs,
  type: "reply",
  value: 8,
};
