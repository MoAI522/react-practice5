import React from "react";
import styled from "styled-components";

import Icon, { ICON } from "../Icon";
import STYLEVARS from "../../../style_vars";

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
    <StyledButton data-type={type} onClick={onClick}>
      <StyledIconWrapper>
        <Icon icon={icon} />
      </StyledIconWrapper>
      <StyledValue>{value > 0 ? value : ""}</StyledValue>
    </StyledButton>
  );
};
export default ReactionButton;

const StyledIconWrapper = styled.div`
  ${STYLEVARS.TEXT.L}
  border-radius: 50%;
  padding: 10px;
  transition-duration: 0.3s;
`;

const StyledValue = styled.div`
  ${STYLEVARS.TEXT.M}
  margin-left: 4px;
  transition-duration: 0.3s;
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  padding: 0;
  background: transparent;
  color: ${STYLEVARS.COLOR.LIGHT};
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 80px;

  &[data-type="reply"] {
    ${StyledIconWrapper} {
      background-color: ${STYLEVARS.COLOR.PRIMARY_HOVER_TRANSPARENT};
    }

    &:hover {
      color: ${STYLEVARS.COLOR.PRIMARY};

      ${StyledIconWrapper} {
        background-color: ${STYLEVARS.COLOR.PRIMARY_HOVER};
      }
    }
  }

  &[data-type="retweet"] {
    ${StyledIconWrapper} {
      background-color: ${STYLEVARS.COLOR.RETWEET_HOVER_TRANSPARENT};
    }

    &:hover {
      color: ${STYLEVARS.COLOR.RETWEET};

      ${StyledIconWrapper} {
        background-color: ${STYLEVARS.COLOR.RETWEET_HOVER};
      }
    }
  }

  &[data-type="favorite"] {
    ${StyledIconWrapper} {
      background-color: ${STYLEVARS.COLOR.FAVORITE_HOVER_TRANSPARENT};
    }

    &:hover {
      color: ${STYLEVARS.COLOR.FAVORITE};

      ${StyledIconWrapper} {
        background-color: ${STYLEVARS.COLOR.FAVORITE_HOVER};
      }
    }
  }
`;
