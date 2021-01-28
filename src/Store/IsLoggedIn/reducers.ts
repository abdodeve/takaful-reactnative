import { LOG_IN, Actions } from "./types";

const initialState = false;

export const IsLoggedInReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case LOG_IN:
      return action.isLoggedIn;
    default:
      return state;
  }
};
