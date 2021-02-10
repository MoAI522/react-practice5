import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Icon, { ICON } from "../Icon";
import STYLEVARS from "../../../style_vars";

export interface Props {
  icon: ICON;
  href: string;
  logo?: boolean;
  primary?: boolean;
}
const IconButton: React.FC<Props> = ({
  icon,
  href,
  logo = false,
  primary = false,
}) => {
  const isActive = location.pathname.match(new RegExp(`^${href}`));

  return (
    <StyledLink
      to={href}
      data-active={isActive}
      data-logo={logo}
      data-primary={primary}
    >
      <StyledIconWrapper>
        <Icon icon={icon} />
      </StyledIconWrapper>
    </StyledLink>
  );
};
export default IconButton;

const StyledIconWrapper = styled.div`
  font-size: 24px;
`;

const StyledLink = styled(Link)`
  background: transparent;
  color: ${STYLEVARS.COLOR.PRIMARY};
  background-color: ${STYLEVARS.COLOR.PRIMARY_HOVER_TRANSPARENT};
  text-decoration: none;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  transition-duration: 0.2s;

  &:hover {
    background-color: ${STYLEVARS.COLOR.PRIMARY_HOVER};
  }

  &[data-active="true"] > ${StyledIconWrapper} {
    text-shadow: 0 0 2px ${STYLEVARS.COLOR.PRIMARY};
  }

  &[data-logo="true"] {
    color: ${STYLEVARS.COLOR.SECONDARY};

    &.active > ${StyledIconWrapper} {
      text-shadow: none;
    }
  }

  &[data-primary="true"] {
    background-color: ${STYLEVARS.COLOR.PRIMARY};
    color: ${STYLEVARS.COLOR.SECONDARY};

    &:hover {
      background-color: ${STYLEVARS.COLOR.PRIMARY};
      opacity: 0.8;
    }
  }
`;
