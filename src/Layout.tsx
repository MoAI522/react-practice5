import React, { useCallback, useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import Sidebar from "./components/organisms/Sidebar";
import styled from "styled-components";
import {
  OwnAccountContext,
  getOwnAccountContextValue,
} from "./contexts/own_account";
import TAccount from "./interfaces/account";

const Layout: React.FC<RouteComponentProps> = ({ children }) => {
  const [
    ownAccountContextValue,
    setOwnAccountContextValue,
  ] = useState<TAccount>(null);
  const [fetched, setFetched] = useState<boolean>(false);
  useCallback(async () => {
    if (fetched) return;
    setFetched(true);
    setOwnAccountContextValue(await getOwnAccountContextValue());
  }, [ownAccountContextValue, fetched])();

  return (
    <OwnAccountContext.Provider value={ownAccountContextValue}>
      <StyledWrapper>
        <StyledSidebarContainer>
          <Sidebar />
        </StyledSidebarContainer>
        <StyledMainContainer>{children}</StyledMainContainer>
      </StyledWrapper>
    </OwnAccountContext.Provider>
  );
};
export default withRouter(Layout);

const StyledWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

const StyledSidebarContainer = styled.div`
  flex: 0 0 auto;
`;

const StyledMainContainer = styled.div`
  flex: 1 1 auto;
  max-width: 800px;
`;
