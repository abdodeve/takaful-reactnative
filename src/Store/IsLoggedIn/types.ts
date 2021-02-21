export const LOG_IN = "LOG_IN";
export const LOG_IN_ASYNC = "LOG_IN_ASYNC";

// export type LogInType = {
//   index: number;
// };

interface logInActionType {
  type: typeof LOG_IN;
  isLoggedIn: boolean;
}
interface logInAsyncActionType {
  type: typeof LOG_IN_ASYNC;
}

export type Actions = logInActionType | logInAsyncActionType;
