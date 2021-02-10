import React from "react";

import { Tweet } from "../../../interfaces";

import AccountIcon from "../../atoms/AccountIcon";
import ReactionButton from "../../atoms/ReactionButton";
import "./style.scss";

export interface Props {
  tweet: Tweet;
}
const TweetCell: React.FC<Props> = ({ tweet }) => {
  return (
    <div className="tweet-cell">
      <AccountIcon type="tweet-list" user={tweet.user} onClick={() => {}} />
      <div className="wrapper">
        <div className="tweet-status">
          <span className="user-name">{tweet.user.name}</span>
          <span className="user-id">@{tweet.user.id}</span>・
          <span className="tweet-date">{tweet.date.toDateString()}</span>
        </div>
        <div className="tweet-content">{tweet.text}</div>
        <div className="reaction-buttons">
          <ReactionButton
            type="reply"
            value={tweet.replies.length}
            onClick={() => {}}
          />
          <ReactionButton
            type="retweet"
            value={tweet.retweets.length}
            onClick={() => {}}
          />
          <ReactionButton
            type="favorite"
            value={tweet.favorites.length}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
export default TweetCell;
