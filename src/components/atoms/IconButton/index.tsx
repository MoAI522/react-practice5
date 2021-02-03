import React from "react";
import { Link } from "react-router-dom";

import Icon, { ICON } from "../Icon";

import "./style.scss";

export interface Props {
  icon: ICON;
  href: string;
  logo: boolean;
  primary: boolean;
}
const IconButton: React.FC<Props> = ({
  icon,
  href,
  logo = false,
  primary = false,
}) => {
  const activeClass = location.pathname.match(new RegExp(`^${href}`))
    ? "active"
    : "";
  const logoClass = logo ? "logo" : "";
  const primaryClass = primary ? "primary" : "";

  return (
    <Link
      to={href}
      className={`icon-button ${activeClass} ${logoClass} ${primaryClass}`}
    >
      <Icon icon={icon} />
    </Link>
  );
};
export default IconButton;
