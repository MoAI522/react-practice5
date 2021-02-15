const FONTFAMILY = {
  SANS: "'Noto Sans JP', sans-serif",
  SERIF: "'Noto Serif JP', serif",
};
type FONTFAMILY = typeof FONTFAMILY[keyof typeof FONTFAMILY];
export default FONTFAMILY;
