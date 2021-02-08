import React, { useEffect } from "react";
import { isDefined } from "../../../common";

import "./style.scss";

const TweetInput: React.FC = () => {
  useEffect(() => {
    const textarea = document.getElementById(
      "tweet_text"
    ) as HTMLTextAreaElement;
    const dummy = textarea?.previousElementSibling as HTMLElement;
    isDefined(dummy);

    textarea.addEventListener("input", () => {
      dummy.textContent = textarea.value + " ";
      textarea.style.height = dummy.clientHeight + "px";
      console.log(`${textarea.clientHeight}, ${dummy.clientHeight}`);
    });
  }, []);

  return (
    <div className="tweet-input">
      <div className="wrapper">
        <div className="dummy-textarea"></div>
        <textarea id="tweet_text" placeholder="いまどうしてる？"></textarea>
      </div>
    </div>
  );
};
export default TweetInput;
