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

    textarea.style.height = dummy.clientHeight + "px";

    textarea.addEventListener("input", () => {
      dummy.textContent = textarea.value + " ";
      textarea.style.height = dummy.clientHeight + "px";
    });
  }, []);

  return (
    <label className="tweet-input" htmlFor="tweet_text">
      <div className="wrapper">
        <div className="dummy-textarea"></div>
        <textarea id="tweet_text" placeholder="いまどうしてる？"></textarea>
      </div>
    </label>
  );
};
export default TweetInput;
