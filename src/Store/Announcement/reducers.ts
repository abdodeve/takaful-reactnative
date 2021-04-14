import { GET_ANNOUNCEMENTS, SET_ANNOUNCEMENTS, Actions } from "./types";

const initialState: any = { isFetching: true, items: [] };

export const AnnouncementReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case GET_ANNOUNCEMENTS:
      // console.log("GET_ANNOUNCEMENTS");
      return { isFetching: true, items: state.items };
    case SET_ANNOUNCEMENTS:
      // console.log("SET_ANNOUNCEMENTS", { state });
      // console.log("action.payload", action.payload);
      return { isFetching: false, items: [...state.items, ...action.payload] };
    // return state;
    default:
      return state;
  }
};
