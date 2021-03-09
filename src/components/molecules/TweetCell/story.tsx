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
    id: "0",
    account: {
      id: "0",
      username: "test",
      display_name: "test",
      avatar: "./images/icon.jpg",
    },
    created_at: "2021-03-09T04:31:00",
    content: "テキストテキスト",
    replies_count: 0,
    reblogs_count: 0,
    favourites_count: 0,
  },
};
