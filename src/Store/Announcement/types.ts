import { Announcement } from "./../../Models/Announcement";

export const GET_ANNOUNCEMENTS = "GET_ANNOUNCEMENTS";
export const GET_ANNOUNCEMENTS_FAILED = "GET_ANNOUNCEMENTS_FAILED";
export const SET_ANNOUNCEMENTS = "SET_ANNOUNCEMENTS";

interface GetAnnouncementsActionType {
  type: typeof GET_ANNOUNCEMENTS;
  payload: [Announcement];
  announcementType: string;
  refresh: boolean;
}
interface GetAnnouncementsFailedActionType {
  type: typeof GET_ANNOUNCEMENTS_FAILED;
  error: any;
}
interface SetAnnouncementsActionType {
  type: typeof SET_ANNOUNCEMENTS;
  payload: [Announcement];
  announcementType: string;
  refresh: boolean;
}

export type Actions =
  | GetAnnouncementsActionType
  | SetAnnouncementsActionType
  | GetAnnouncementsFailedActionType;
