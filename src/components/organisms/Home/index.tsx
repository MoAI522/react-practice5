import React, { useEffect } from "react";
import styled from "styled-components";
import useTimeline from "../../../hooks/timeline";
import STYLEVARS from "../../../style_vars";

import CreateTweet from "../../molecules/CreateTweet";
import TweetCell from "../../molecules/TweetCell";

const Home: React.FC = () => {
  const { timeline, fetchTimeline } = useTimeline();
  useEffect(() => {
    fetchTimeline();
    setInterval(fetchTimeline, 10000);
  }, []);

  let tweetCells;
  if (timeline.length)
    tweetCells = timeline.map((status) => (
      <TweetCell tweet={status} key={status.id} />
    ));
  else tweetCells = <p>ツイートはありません</p>;

  return (
    <StyledWrapper>
      <StyledHeader>ホーム</StyledHeader>
      <CreateTweet fetchTimeline={fetchTimeline} />
      <StyledSpacer className="spacer"></StyledSpacer>
      <div>{tweetCells}</div>
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
