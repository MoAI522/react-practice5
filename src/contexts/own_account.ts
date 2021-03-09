import { createContext } from "react";
import getAccountCredentials from "../api/get_account_credentials";
import TAccount from "../interfaces/account";

export const getOwnAccountContextValue = getAccountCredentials;
export const OwnAccountContext = createContext<TAccount>(null);
