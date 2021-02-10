import React, { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import "./style.scss";

import Sidebar from "./components/organisms/Sidebar";

import { fetchUser } from "./redux/slices/user";
import { useDispatch, useSelector } from "react-redux";

const Layout: React.FC<RouteComponentProps> = ({ children, history }) => {
  return (
    <div className="layout">
      <Sidebar />
      {children}
    </div>
  );
};
export default withRouter(Layout);
