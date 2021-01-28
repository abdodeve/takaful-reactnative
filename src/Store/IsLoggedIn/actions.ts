import { LOG_IN } from "./types";

export const logInAction = (isLoggedIn: boolean) => ({
  type: LOG_IN,
  isLoggedIn,
});
