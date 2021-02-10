import React from "react";
import { useSelector } from "react-redux";
import { User } from "../../../interfaces";

import "./style.scss";

export interface Props {
  type: "sidebar" | "create-tweet" | "tweet-list";
  user: User;
  onClick: () => void;
}
const AccountIcon: React.FC<Props> = ({ type, user, onClick }) => {
  return (
    <button className={`account-icon button-${type}`} onClick={onClick}>
      <img src={user.iconSrc} />
    </button>
  );
};
export default AccountIcon;
