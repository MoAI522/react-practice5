import React, { useContext } from "react";
import styled from "styled-components";

import STYLEVARS from "../../../style_vars";

import { ICON } from "../../atoms/Icon";
import IconButton from "../../atoms/IconButton";
import AccountIcon from "../../atoms/AccountIcon";
import { OwnAccountContext } from "../../../contexts/own_account";

const Sidebar: React.FC = () => {
  const ownAccount = useContext(OwnAccountContext);

  return (
    <StyledAside>
      <StyledWrapper>
        <IconButton icon={ICON.TWITTER} href="/home/" logo={true} />
        <IconButton icon={ICON.HOME} href="/home/" />
        <IconButton icon={ICON.HASHTAG} href="/search/" />
        <IconButton icon={ICON.BELL} href="/notices/" />
        <IconButton icon={ICON.ENVELOPE} href="/messages/" />
        <IconButton icon={ICON.USER} href="/profile/" />
        <IconButton icon={ICON.BARS} href="/other/" />
        <IconButton icon={ICON.PEN} href="/tweet/" primary={true} />
        <AccountIcon
          type="sidebar"
          account={ownAccount}
          onClick={() => {
            console.log("clicked");
          }}
        />
      </StyledWrapper>
    </StyledAside>
  );
};
export default Sidebar;

const StyledAside = styled.aside`
  width: 180px;
  overflow-y: auto;
  text-align: right;
  border-right: 1px solid ${STYLEVARS.COLOR.LIGHT};
  position: sticky;
`;

const StyledWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 10px;

  & > *:not(:first-child) {
    margin-top: 10px;
  }
`;
