import { Announcement } from "./../../Models/Announcement";
import { GET_ANNOUNCEMENTS, SET_ANNOUNCEMENTS } from "./types";

export const getAnnouncementsAction = (
  payload: [Announcement],
  announcementType: string,
  refresh: boolean
) => ({
  type: GET_ANNOUNCEMENTS,
  payload,
  announcementType,
  refresh,
});

export const getAnnouncementsFailedAction = (error) => ({
  type: GET_ANNOUNCEMENTS,
  error,
});

export const setAnnouncementsAction = (
  payload: Announcement[],
  announcementType: string,
  refresh: boolean
) => ({
  type: SET_ANNOUNCEMENTS,
  payload,
  announcementType,
  refresh,
});
