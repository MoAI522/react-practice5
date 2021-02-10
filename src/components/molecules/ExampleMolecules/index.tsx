import React from "react";
import styled from "styled-components";

import ExampleAtom from "../../atoms/ExampleAtom";

const ExampleMolecule: React.FC = () => {
  return (
    <StyledWrapper>
      <ExampleAtom text="test" />
      <ExampleAtom text="component" />
    </StyledWrapper>
  );
};
export default ExampleMolecule;

const StyledWrapper = styled.div`
  padding: 40px;
  background-color: gray;
  display: inline-block;
`;
