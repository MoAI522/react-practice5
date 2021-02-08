import React from "react";

import "./style.scss";

export interface Props {
  type: "sidebar" | "create-tweet" | "tweet-list";
  src: string;
  onClick: () => void;
}
const AccountIcon: React.FC<Props> = ({ type, src, onClick }) => {
  return (
    <button className={`account-icon button-${type}`} onClick={onClick}>
      <img src={src} />
    </button>
  );
};
export default AccountIcon;
