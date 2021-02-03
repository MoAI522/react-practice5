import React from "react";

import ExampleAtom from "../../atoms/ExampleAtom";
import "./style.scss";

const ExampleMolecule: React.FC = () => {
  return (
    <div className="example-molecule">
      <ExampleAtom text="test" />
      <ExampleAtom text="component" />
    </div>
  );
};
export default ExampleMolecule;
