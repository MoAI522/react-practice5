import React, { useEffect } from "react";
import styled from "styled-components";
import { isDefined } from "../../../common";
import STYLEVARS from "../../../style_vars";

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
    <StyledLabel htmlFor="tweet_text">
      <StyledWrapper>
        <StyledDummyTextarea></StyledDummyTextarea>
        <StyledTextarea
          id="tweet_text"
          placeholder="いまどうしてる？"
        ></StyledTextarea>
      </StyledWrapper>
    </StyledLabel>
  );
};
export default TweetInput;

const StyledTextarea = styled.textarea`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  resize: none;
  overflow: hidden;
  padding: 0;
  ${STYLEVARS.TEXT.L}
  font-family: ${STYLEVARS.FONTFAMILY.SANS};
  color: ${STYLEVARS.COLOR.SECONDARY};
  border: none;
  background: transparent;
  outline: none;
`;

const StyledDummyTextarea = styled.div`
  width: 100%;
  min-height: ${STYLEVARS.LINEHEIGHT.L}px;
  ${STYLEVARS.TEXT.L}
  font-family: ${STYLEVARS.FONTFAMILY.SANS};
  word-break: break-all;
  white-space: pre-wrap;
  visibility: hidden;
`;

const StyledWrapper = styled.div`
  position: relative;
  max-height: ${STYLEVARS.LINEHEIGHT.L * 29}px;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 5px;
  width: 100%;
`;

const StyledLabel = styled.label`
  padding: 10px 0;
  border-bottom: 1px solid ${STYLEVARS.COLOR.LIGHT};
  display: flex;
  cursor: text;
`;
