import React from "react";
import styled from "styled-components";

import TStatus from "../../../interfaces/status";
import STYLEVARS from "../../../style_vars";

import AccountIcon from "../../atoms/AccountIcon";
import ReactionButton from "../../atoms/ReactionButton";

export interface Props {
  tweet: TStatus;
}
const TweetCell: React.FC<Props> = ({ tweet }) => {
  return (
    <StyledWrapper>
      <StyledAccountIconWrapper>
        <AccountIcon
          type="tweet-list"
          account={tweet.account}
          onClick={() => {
            console.log("clicked");
          }}
        />
      </StyledAccountIconWrapper>
      <StyledRightsideWrapper>
        <StyledStatusWrapper>
          <StyledUserName>{tweet.account.display_name}</StyledUserName>
          <StyledUserId>@{tweet.account.username}</StyledUserId>・
          <span>{tweet.created_at}</span>
        </StyledStatusWrapper>
        <StyledContent dangerouslySetInnerHTML={{ __html: tweet.content }} />
        <StyledReactionButtonsWrapper>
          <ReactionButton
            type="reply"
            value={tweet.replies_count}
            onClick={() => {
              console.log("clicked");
            }}
          />
          <ReactionButton
            type="retweet"
            value={tweet.reblogs_count}
            onClick={() => {
              console.log("clicked");
            }}
          />
          <ReactionButton
            type="favorite"
            value={tweet.favourites_count}
            onClick={() => {
              console.log("clicked");
            }}
          />
        </StyledReactionButtonsWrapper>
      </StyledRightsideWrapper>
    </StyledWrapper>
  );
};
export default TweetCell;

const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  border-bottom: 1px solid ${STYLEVARS.COLOR.LIGHT};
  cursor: pointer;
  background-color: ${STYLEVARS.COLOR.PRIMARY_HOVER_TRANSPARENT};
  transition-duration: 0.3s;

  &:hover {
    background-color: ${STYLEVARS.COLOR.PRIMARY_HOVER};
  }
`;

const StyledAccountIconWrapper = styled.div`
  margin-right: 10px;
  flex: 0 0 auto;
`;

const StyledRightsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1 1 auto;
`;

const StyledStatusWrapper = styled.div`
  color: ${STYLEVARS.COLOR.LIGHT};
`;

const StyledUserName = styled.span`
  color: ${STYLEVARS.COLOR.SECONDARY};
`;

const StyledUserId = styled.span`
  margin-left: 4px;
`;

const StyledContent = styled.div`
  color: ${STYLEVARS.COLOR.SECONDARY};
  word-break: break-all;
  white-space: pre-wrap;
`;

const StyledReactionButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 100px;
`;
