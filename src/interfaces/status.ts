import { IAccount } from "./account";

interface IStatus {
  id: string;
  created_at: string;
  in_reply_to_id?: string;
  sensitive?: string;
  spoiler_text?: string;
  visibility?: string;
  language?: string;
  uri?: string;
  url?: string;
  replies_count: number;
  reblogs_count: number;
  favourites_count: number;
  favourited?: boolean;
  reblogged?: boolean;
  muted?: boolean;
  bookmarked?: boolean;
  content: string;
  reblog?: string;
  application?: {
    name?: string;
    website?: string;
  };
  account: IAccount;
  media_attachments?: Array<string>;
  mentions?: Array<string>;
  tags?: Array<string>;
  emojis?: Array<string>;
}
type TStatus = IStatus;
export default TStatus;
