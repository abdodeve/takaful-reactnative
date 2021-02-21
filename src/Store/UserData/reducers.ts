import { userDataType, SET_USER_DATA, Actions } from "./types";

const initialState = {};

export const UserDataReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case SET_USER_DATA:
      return action.userData;
    default:
      return state;
  }
};
