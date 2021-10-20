import { User } from "./User";

export type Announcement = {
  id: string;
  user_id: string;
  title: string;
  content: string;
  nbImg: number;
  mainImg: ImageSourcePropType;
  images?: false | string[];
  user?: User;
  city: string;
  type: string;
  type_formatted?: string;
  timeSince?: string;
  condition?: number;
  condition_formatted?: string;
  created_at: string;
  created_at_formatted?: string;
  category?: {
    indexPath: { row: number; section: number };
    displayValue: string;
  };
};
