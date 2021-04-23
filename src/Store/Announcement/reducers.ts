import { Announcement } from "../../Models";
import {
  GET_ANNOUNCEMENTS,
  GET_ANNOUNCEMENTS_FAILED,
  SET_ANNOUNCEMENTS,
  Actions,
} from "./types";

const initialState: { isFetching: boolean; items: Array<Announcement> } = {
  isFetching: true,
  items: [],
};

export const AnnouncementReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case GET_ANNOUNCEMENTS:
      return { isFetching: true, items: state.items };
    case GET_ANNOUNCEMENTS_FAILED:
      return { isFetching: false, error: action.error, items: state.items };
    case SET_ANNOUNCEMENTS:
      return { isFetching: false, items: [...state.items, ...action.payload] };
    default:
      return state;
  }
};
