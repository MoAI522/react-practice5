import React, { useContext, useState } from "react";

import AccountIcon from "../../atoms/AccountIcon";
import TweetInput from "../../atoms/TweetInput";
import Button from "../../atoms/Button";
import styled from "styled-components";
import STYLEVARS from "../../../style_vars";
import { OwnAccountContext } from "../../../contexts/own_account";
import useCreateStatus from "../../../hooks/create_status";

export interface Props {
  fetchTimeline: () => Promise<void>;
}
const CreateTweet: React.FC<Props> = ({ fetchTimeline }) => {
  const ownAccount = useContext(OwnAccountContext);
  const createStatus = useCreateStatus();
  const [content, setContent] = useState<string>("");

  return (
    <StyledWrapper>
      <StyledAccountIconWrapper>
        <AccountIcon
          type="create-tweet"
          account={ownAccount}
          onClick={() => {
            console.log("clicked");
          }}
        />
      </StyledAccountIconWrapper>
      <StyledFormsWrapper>
        <TweetInput content={content} setContent={setContent} />
        <StyledButtonsWrapper>
          <div></div>
          <Button
            text="ツイートする"
            onClick={async () => {
              await createStatus(content, "private");
              setContent("");
              fetchTimeline();
            }}
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
