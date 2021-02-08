import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

export interface Props {
  href: string;
  src: string;
}
const TweetAccount: React.FC<Props> = ({ href, src }) => {
  return (
    <Link className="tweet-account" to={href}>
      <img src={src} />
    </Link>
  );
};
export default TweetAccount;
