import { useCallback, useState } from "react";
import getTimeline from "../api/get_timeline";
import TStatus from "../interfaces/status";

type Returns = {
  timeline: Array<TStatus>;
  fetchTimeline: () => Promise<void>;
};
const useTimeline = (): Returns => {
  const [timeline, setTimeline] = useState<Array<TStatus>>([]);
  const fetchTimeline = useCallback(async () => {
    const currentTimeline = await getTimeline();
    if (currentTimeline.length) setTimeline(currentTimeline);
  }, []);

  return { timeline, fetchTimeline };
};
export default useTimeline;
