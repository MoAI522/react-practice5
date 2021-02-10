import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ICON } from "../../atoms/Icon";
import IconButton from "../../atoms/IconButton";
import AccountIcon from "../../atoms/AccountIcon";

import { fetchUser } from "../../../redux/slices/user";

import "./style.scss";

const Sidebar: React.FC = () => {
  const user = useSelector((state) => state.user);
  if (!user.fetching && !user.fetched) {
    const dispatch = useDispatch();
    dispatch(fetchUser);
  }

  return (
    <aside className="sidebar">
      <div className="inner">
        <IconButton icon={ICON.TWITTER} href="/home/" logo={true} />
        <IconButton icon={ICON.HOME} href="/home/" />
        <IconButton icon={ICON.HASHTAG} href="/search/" />
        <IconButton icon={ICON.BELL} href="/notices/" />
        <IconButton icon={ICON.ENVELOPE} href="/messages/" />
        <IconButton icon={ICON.USER} href="/profile/" />
        <IconButton icon={ICON.BARS} href="/other/" />
        <IconButton icon={ICON.PEN} href="/tweet/" primary={true} />
        <AccountIcon type="sidebar" user={user.me} onClick={() => {}} />
      </div>
    </aside>
  );
};
export default Sidebar;
