import React, { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import "./style.scss";

import Sidebar from "./components/organisms/Sidebar";

import { fetchUser } from "./redux/slices/user";
import { useDispatch, useSelector } from "react-redux";

const Layout: React.FC<RouteComponentProps> = ({ children, history }) => {
  const user = useSelector((state) => state.user);
  if (user.fetching || user.fetched) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchUser);
    }, []);
  }

  return (
    <div className="layout">
      <Sidebar />
      {children}
    </div>
  );
};
export default withRouter(Layout);
