import React from "react";
import styled from "styled-components";

export const ICON = {
  TWITTER: "fab fa-twitter",
  HOME: "fas fa-home",
  HASHTAG: "fas fa-hashtag",
  BELL: "far fa-bell",
  ENVELOPE: "far fa-envelope",
  USER: "far fa-user",
  BARS: "fas fa-bars",
  PEN: "fas fa-pen",
  SEARCH: "fas fa-search",
  HEART: "far fa-heart",
  RECYCLE: "fas fa-recycle",
  COMMENT: "far fa-comment",
  ELLIPSIS_H: "fas fa-ellipsis-h",
} as const;
export type ICON = typeof ICON[keyof typeof ICON];

export interface Props {
  icon: ICON;
}
const Icon: React.FC<Props> = ({ icon }) => {
  return <StyledI className={icon}></StyledI>;
};
export default Icon;

const StyledI = styled.i`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
