import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ICON } from "../Icon";
import IconButton, { Props } from "./index";

const Template: Story<Props> = (props) => <IconButton {...props} />;

export default {
  title: "Atoms/IconButton",
  component: IconButton,
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

export const Default = Template.bind({});
Default.args = {
  icon: ICON.HOME,
  href: "/",
};

export const Logo = Template.bind({});
Logo.args = {
  icon: ICON.TWITTER,
  href: "/",
  logo: true,
};

export const Primary = Template.bind({});
Primary.args = {
  icon: ICON.PEN,
  href: "/",
  primary: true,
};
