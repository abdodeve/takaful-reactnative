import { LOG_IN, LOG_IN_ASYNC, Actions } from "./types";

const initialState = false;

export const IsLoggedInReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case LOG_IN:
      return action.isLoggedIn;
    default:
      return state;
  }
};
