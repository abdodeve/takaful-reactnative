export const SET_USER_DATA = "SET_USER_DATA";

export type userDataType = {
  email: string;
  familyName: string;
  givenName: string;
  id: string;
  name: string;
};

interface setUserDataActionType {
  type: typeof SET_USER_DATA;
  userData: userDataType;
}

export type Actions = setUserDataActionType;
