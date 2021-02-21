import { LOG_IN, LOG_IN_ASYNC } from "./types";

export const logInAction = (isLoggedIn: boolean) => ({
  type: LOG_IN,
  isLoggedIn,
});

export const logInAsyncAction = (isLoggedIn: boolean) => ({
  type: LOG_IN_ASYNC,
  isLoggedIn,
});
