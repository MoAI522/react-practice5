const LINEHEIGHT = {
  M: 20,
  L: 30,
};
type LINEHEIGHT = typeof LINEHEIGHT[keyof typeof LINEHEIGHT];
export default LINEHEIGHT;
