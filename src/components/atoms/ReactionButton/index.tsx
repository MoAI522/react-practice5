import React from "react";

import Icon, { ICON } from "../Icon";

import "./style.scss";

export interface Props {
  type: "reply" | "retweet" | "favorite";
  value: number;
  onClick: () => void;
}
const ReactionButton: React.FC<Props> = ({ type, value, onClick }) => {
  let icon: ICON;
  switch (type) {
    case "reply":
      icon = ICON.COMMENT;
      break;
    case "retweet":
      icon = ICON.RECYCLE;
      break;
    case "favorite":
      icon = ICON.HEART;
      break;
  }

  return (
    <button
      className={`reaction-button reaction-button-${type}`}
      onClick={onClick}
    >
      <div className="icon-wrapper">
        <Icon icon={icon} />
      </div>
      <div className="value">{value > 0 ? value : ""}</div>
    </button>
  );
};
export default ReactionButton;
