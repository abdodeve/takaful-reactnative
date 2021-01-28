export const LOG_IN = "LOG_IN";

// export type LogInType = {
//   index: number;
// };

interface logInActionType {
  type: typeof LOG_IN;
  isLoggedIn: boolean;
}

export type Actions = logInActionType;
