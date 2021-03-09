import { useCallback } from "react";
import postNewStatus from "../api/post_new_status";

const useCreateStatus = (): ((
  content: string,
  visibility: "public" | "unlisted" | "private" | "direct"
) => void) => {
  const createStatus = useCallback(
    (
      content: string,
      visibility: "public" | "unlisted" | "private" | "direct"
    ) => {
      postNewStatus(content, visibility);
    },
    []
  );

  return createStatus;
};
export default useCreateStatus;
