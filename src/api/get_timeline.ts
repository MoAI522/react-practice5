import TStatus from "../interfaces/status";
import axios from "./axios";

const getTimeline = async (): Promise<Array<TStatus>> => {
  let timeline: Array<TStatus> = [];
  await axios
    .get<Array<TStatus>>("/v1/timelines/home")
    .then((res) => {
      timeline = res.data;
      console.log("timeline", timeline);
    })
    .catch((err) => {
      console.log("error", err);
    });

  return timeline;
};
export default getTimeline;
