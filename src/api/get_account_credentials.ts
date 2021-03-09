import TAccount from "../interfaces/account";
import axios from "./axios";

const getAccountCredentials = async (): Promise<TAccount> => {
  let account: TAccount = null;
  await axios
    .get<TAccount>("/v1/accounts/verify_credentials")
    .then((res) => {
      console.log("account_credential", res.data);
      account = res.data;
    })
    .catch((err) => {
      console.log("error", err);
    });

  return account;
};
export default getAccountCredentials;
