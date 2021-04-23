import { Announcement } from "./../../Models/Announcement";
import { GET_ANNOUNCEMENTS, SET_ANNOUNCEMENTS } from "./types";

export const getAnnouncementsAction = (payload: [Announcement]) => ({
  type: GET_ANNOUNCEMENTS,
  payload,
});

export const getAnnouncementsFailedAction = (error) => ({
  type: GET_ANNOUNCEMENTS,
  error,
});

export const setAnnouncementsAction = (payload: [Announcement]) => ({
  type: SET_ANNOUNCEMENTS,
  payload,
});
