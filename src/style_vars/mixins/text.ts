import FONTSIZE from "../properties/font-size";
import LINEHEIGHT from "../properties/line-height";

const TEXT = {
  M: `
    font-size: ${FONTSIZE.M}px;
    line-height: ${LINEHEIGHT.M}px;
  `,
  L: `
    font-size: ${FONTSIZE.L}px;
    line-height: ${LINEHEIGHT.L}px;
  `,
};
type TEXT = typeof TEXT[keyof typeof TEXT];
export default TEXT;
