import React from "react";
import { Tweet } from "../../../interfaces";

import CreateTweet from "../../molecules/CreateTweet";
import TweetCell from "../../molecules/TweetCell";

import "./style.scss";

const Home: React.FC = () => {
  let tweets: Array<Tweet> = [
    {
      id: 0,
      user: {
        id: "aaaa",
        name: "test",
        iconSrc: "./images/icon.jpg",
        bio: "",
      },
      date: new Date(2021, 2, 9, 12, 0, 0),
      text: "テキストテキスト",
      replies: [],
      retweets: [],
      favorites: [],
    },
    {
      id: 1,
      user: {
        id: "aaaa",
        name: "test",
        iconSrc: "./images/icon.jpg",
        bio: "",
      },
      date: new Date(2021, 2, 9, 12, 0, 0),
      text: "テキストテキストテキ",
      replies: [],
      retweets: [],
      favorites: [],
    },
  ];

  return (
    <div className="home">
      <div className="home-header">ホーム</div>
      <CreateTweet />
      <div className="spacer"></div>
      <div className="tweet-list">
        {tweets.map((value) => (
          <TweetCell tweet={value} />
        ))}
      </div>
    </div>
  );
};
export default Home;
