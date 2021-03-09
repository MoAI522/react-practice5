import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import TweetInput, { Props } from "./index";

const Template: Story<Props> = (props) => <TweetInput {...props} />;

export default {
  title: "Atoms/TweetInput",
  component: TweetInput,
} as Meta;

export const Default = Template.bind({});
