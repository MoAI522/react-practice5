import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import TweetCell, { Props } from "./index";

const Template: Story<Props> = (props) => <TweetCell {...props} />;

export default {
  title: "Molecules/TweetCell",
  component: TweetCell,
} as Meta;

export const Default = Template.bind({});
Default.args = {
  tweet: {
    id: 0,
    user: {
      id: "aaaa",
      name: "test",
      iconSrc: "./images/icon.jpg",
      bio: "",
    },
    date: new Date(2021, 2, 9, 12, 0, 0),
    text: "テキストテキスト",
    replies: [],
    retweets: [],
    favorites: [],
  },
};
