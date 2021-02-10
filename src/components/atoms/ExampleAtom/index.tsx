import React from "react";
import styled from "styled-components";

export interface Props {
  text: string;
}
const ExampleAtom: React.FC<Props> = ({ text }) => {
  return <StyledH1 className="example-atom">{text}</StyledH1>;
};
export default ExampleAtom;

const StyledH1 = styled.h1`
  color: red;
`;
