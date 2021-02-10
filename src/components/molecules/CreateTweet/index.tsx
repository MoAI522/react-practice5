import React from "react";

import AccountIcon from "../../atoms/AccountIcon";
import TweetInput from "../../atoms/TweetInput";
import Button from "../../atoms/Button";
import { useSelector } from "react-redux";
import styled from "styled-components";
import STYLEVARS from "../../../style_vars";

const CreateTweet: React.FC = () => {
  const jumpToAccountPage = () => {};
  const user = useSelector((state) => state.user);

  return (
    <StyledWrapper>
      <StyledAccountIconWrapper>
        <AccountIcon
          type="create-tweet"
          user={user.me}
          onClick={jumpToAccountPage}
        />
      </StyledAccountIconWrapper>
      <StyledFormsWrapper>
        <TweetInput />
        <StyledButtonsWrapper>
          <div></div>
          <Button
            text="ツイートする"
            onClick={() => {}}
            size="m"
            isPrimary={true}
          />
        </StyledButtonsWrapper>
      </StyledFormsWrapper>
    </StyledWrapper>
  );
};
export default CreateTweet;

const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px 0 0;
`;

const StyledFormsWrapper = styled.div`
  flex: 1 1 auto;
`;

const StyledAccountIconWrapper = styled.div`
  flex: 0 0 auto;
  margin-right: 16px;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid ${STYLEVARS.COLOR.LIGHT};
  padding: 10px;
`;
