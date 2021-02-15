import React from "react";
import styled from "styled-components";
import { Tweet } from "../../../interfaces";
import STYLEVARS from "../../../style_vars";

import CreateTweet from "../../molecules/CreateTweet";
import TweetCell from "../../molecules/TweetCell";

const Home: React.FC = () => {
  const tweets: Array<Tweet> = [
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
    <StyledWrapper>
      <StyledHeader>ホーム</StyledHeader>
      <CreateTweet />
      <StyledSpacer className="spacer"></StyledSpacer>
      <div>
        {tweets.map((tweet) => (
          <TweetCell tweet={tweet} key={tweet.id} />
        ))}
      </div>
    </StyledWrapper>
  );
};
export default Home;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-right: 1px solid ${STYLEVARS.COLOR.LIGHT};
`;

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  padding: 16px 10px;
  color: ${STYLEVARS.COLOR.SECONDARY};
  ${STYLEVARS.TEXT.L}
  font-weight: 700;
  border-bottom: 1px solid ${STYLEVARS.COLOR.LIGHT};
  background-color: ${STYLEVARS.COLOR.BACKGROUND};
  z-index: 1;
`;

const StyledSpacer = styled.div`
  background-color: ${STYLEVARS.COLOR.DARK};
  border-bottom: 1px solid ${STYLEVARS.COLOR.LIGHT};
  height: 16px;
`;
