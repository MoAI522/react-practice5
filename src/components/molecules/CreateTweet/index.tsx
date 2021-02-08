import React from "react";

import AccountIcon from "../../atoms/AccountIcon";
import TweetInput from "../../atoms/TweetInput";
import Button from "../../atoms/Button";
import "./style.scss";

const CreateTweet: React.FC = () => {
  const jumpToAccountPage = () => {};

  return (
    <div className="create-tweet">
      <AccountIcon
        type="create-tweet"
        src="./images/icon.jpg"
        onClick={jumpToAccountPage}
      />
      <div className="wrapper">
        <TweetInput />
        <div className="buttons-wrapper">
          <div className="media-buttons"></div>
          <Button
            text="ツイートする"
            onClick={() => {}}
            size="m"
            isPrimary={true}
          />
        </div>
      </div>
    </div>
  );
};
export default CreateTweet;
