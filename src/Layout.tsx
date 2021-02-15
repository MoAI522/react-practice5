import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import Sidebar from "./components/organisms/Sidebar";
import styled from "styled-components";

const Layout: React.FC<RouteComponentProps> = ({ children }) => {
  return (
    <StyledWrapper>
      <StyledSidebarContainer>
        <Sidebar />
      </StyledSidebarContainer>
      <StyledMainContainer>{children}</StyledMainContainer>
    </StyledWrapper>
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
