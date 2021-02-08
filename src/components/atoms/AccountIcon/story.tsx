import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import AccountIcon, { Props } from "./index";

const Template: Story<Props> = (props) => <AccountIcon {...props} />;

export default {
  title: "Atoms/AccountIcon",
  component: AccountIcon,
} as Meta;

const commonArgs = {
  src: "./images/icon.jpg",
  onClick: () => console.log("clicked"),
};

export const Sidebar = Template.bind({});
Sidebar.args = {
  ...commonArgs,
  type: "sidebar",
};

export const CreateTweet = Template.bind({});
CreateTweet.args = {
  ...commonArgs,
  type: "create-tweet",
};

export const TweetList = Template.bind({});
TweetList.args = {
  ...commonArgs,
  type: "tweet-list",
};
