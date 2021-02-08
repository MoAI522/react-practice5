import React from "react";
import { NoEmitOnErrorsPlugin } from "webpack";

import "./style.scss";

export interface Props {
  text: string;
  onClick: () => void;
  size: "s" | "m";
  isPrimary: boolean;
}
const Button: React.FC<Props> = ({
  text,
  onClick,
  size,
  isPrimary = false,
}) => {
  const primaryClass = isPrimary ? "primary" : "";

  return (
    <button className={`button ${size} ${primaryClass}`} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};
export default Button;
