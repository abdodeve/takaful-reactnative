import { SET_USER_DATA, userDataType } from "./types";

export const setUserDataAction = (userData: userDataType) => ({
  type: SET_USER_DATA,
  userData,
});
