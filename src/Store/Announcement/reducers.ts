import { Announcement } from "../../Models";
import { TypeAnnouncement } from "../../Models/TypeAnnouncement";
import {
  GET_ANNOUNCEMENTS,
  GET_ANNOUNCEMENTS_FAILED,
  SET_ANNOUNCEMENTS,
  Actions,
} from "./types";

const initialState: {
  isFetching: boolean;
  items_donation: Array<Announcement>;
  items_request: Array<Announcement>;
  items_donation_user: Array<Announcement>;
  items_request_user: Array<Announcement>;
} = {
  isFetching: true,
  items_donation: [],
  items_request: [],
  items_donation_user: [],
  items_request_user: [],
};

export const AnnouncementReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case GET_ANNOUNCEMENTS:
      return { ...state, isFetching: true };
    case GET_ANNOUNCEMENTS_FAILED:
      return { ...state, isFetching: false, error: action.error };
    case SET_ANNOUNCEMENTS:
      switch (action.announcementType) {
        case TypeAnnouncement.Donation:
          if (action.refresh) {
            return {
              ...state,
              isFetching: false,
              items_donation: action.payload,
            };
          }
          return {
            ...state,
            isFetching: false,
            items_donation: [...state.items_donation, ...action.payload],
          };
        case TypeAnnouncement.Request:
          if (action.refresh) {
            return {
              ...state,
              isFetching: false,
              items_request: action.payload,
            };
          }
          return {
            ...state,
            isFetching: false,
            items_request: [...state.items_request, ...action.payload],
          };
        case TypeAnnouncement.DonationUser:
          if (action.refresh) {
            return {
              ...state,
              isFetching: false,
              items_donation_user: action.payload,
            };
          }
          return {
            ...state,
            isFetching: false,
            items_donation_user: [
              ...state.items_donation_user,
              ...action.payload,
            ],
          };
        case TypeAnnouncement.RequestUser:
          if (action.refresh) {
            return {
              ...state,
              isFetching: false,
              items_request_user: action.payload,
            };
          }
          return {
            ...state,
            isFetching: false,
            items_request_user: [
              ...state.items_request_user,
              ...action.payload,
            ],
          };
        default:
          break;
      }
      return state;
    default:
      return state;
  }
};
