import { User } from "./../../Models/User";
export const SET_USER_DATA = "SET_USER_DATA";

export type userDataType = User | boolean;

interface setUserDataActionType {
  type: typeof SET_USER_DATA;
  userData: userDataType;
}

export type Actions = setUserDataActionType;
