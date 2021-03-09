import axios from "./axios";

const postNewStatus = async (
  content: string,
  visibility: "public" | "unlisted" | "private" | "direct"
): Promise<{ id: string } | null> => {
  const qs = {
    status: content,
    visibility: visibility,
  };
  let response = null;
  await axios
    .post("/v1/statuses", qs)
    .then((res) => {
      console.log("create_status", res.data);
      response = res.data;
    })
    .catch((err) => {
      console.log("error", err);
    });
  return response;
};
export default postNewStatus;
