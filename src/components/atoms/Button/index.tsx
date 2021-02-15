import React from "react";
import styled from "styled-components";

import STYLEVARS from "../../../style_vars";

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
  return (
    <StyledButton data-size={size} data-primary={isPrimary} onClick={onClick}>
      <span>{text}</span>
    </StyledButton>
  );
};
export default Button;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: 2px solid ${STYLEVARS.COLOR.PRIMARY};
  outline: none;
  background-color: ${STYLEVARS.COLOR.PRIMARY_HOVER_TRANSPARENT};
  transition-duration: 0.2s;
  cursor: pointer;
  color: ${STYLEVARS.COLOR.PRIMARY};
  font-size: ${STYLEVARS.FONTSIZE.M}px;
  line-height: ${STYLEVARS.LINEHEIGHT.M}px;
  font-family: ${STYLEVARS.FONTFAMILY.SANS};
  font-weight: 700;
  white-space: nowrap;

  & > span {
    display: block;
    height: ${STYLEVARS.FONTSIZE.M}px;
  }

  &:hover {
    background-color: ${STYLEVARS.COLOR.PRIMARY_HOVER};
  }

  &[data-size="s"] {
    width: 100px;
    height: 32px;
    border-radius: 16px;
  }

  &[data-size="m"] {
    width: 120px;
    height: 40px;
    border-radius: 20px;
  }

  &[data-primary="true"] {
    color: ${STYLEVARS.COLOR.SECONDARY};
    background-color: ${STYLEVARS.COLOR.PRIMARY};

    &:hover {
      background-color: ${STYLEVARS.COLOR.PRIMARY};
      opacity: 0.7;
    }
  }
`;
