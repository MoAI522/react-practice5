import React from "react";

import { ICON } from "../../atoms/Icon";
import IconButton from "../../atoms/IconButton";
import AccountIcon from "../../atoms/AccountIcon";

import "./style.scss";

const Sidebar: React.FC = () => {
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
        <AccountIcon
          type="sidebar"
          src="./images/icon.jpg"
          onClick={() => {}}
        />
      </div>
    </aside>
  );
};
export default Sidebar;
