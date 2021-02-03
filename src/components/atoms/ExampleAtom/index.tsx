import React from "react";

import "./style.scss";

export interface Props {
  text: string;
}
const ExampleAtom: React.FC<Props> = ({ text }) => {
  return <h1 className="example-atom">{text}</h1>;
};
export default ExampleAtom;
