import React from "react";
import styled from "styled-components";
import { User } from "../../../interfaces";
import STYLEVARS from "../../../style_vars";

export interface Props {
  type: "sidebar" | "create-tweet" | "tweet-list"; user: User
  onClick: () => void;
}
const AccountIcon: React.FC<Props> = ({ type, user, onClick }) => {
  switch (type) {
    case "sidebar":
      return (
        <StyledSidebarIcon onClick={onClick}>
          <StyledImg src={user.iconSrc} />
        </StyledSidebarIcon>
      );
    case "create-tweet":
      return (
        <StyledCreateTweetIcon onClick={onClick}>
          <StyledImg src={user.iconSrc} />
        </StyledCreateTweetIcon>
      );
    case "tweet-list":
      return (
        <StyledTweetListIcon onClick={onClick}>
          <StyledImg src={user.iconSrc} />
        </StyledTweetListIcon>
      );
  }
};
export default AccountIcon;

const StyledButton = styled.button`
  display: flex;
  border: none;
  outline: none;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  transition-duration: 0.2s;
`;

const StyledSidebarIcon = styled(StyledButton)`
  width: 60px;
  height: 60px;
  padding: 10px;
  background-color: ${STYLEVARS.COLOR.PRIMARY_HOVER_TRANSPARENT};

  &:hover {
    background-color: ${STYLEVARS.COLOR.PRIMARY_HOVER};
  }
`;

const StyledCreateTweetIcon = styled(StyledButton)`
  width: 60px;
  height: 60px;

  &:hover {
    opacity: 0.7;
  }
`;

const StyledTweetListIcon = styled(StyledButton)`
  width: 50px;
  height: 50px;

  &:hover {
    opacity: 0.7;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
