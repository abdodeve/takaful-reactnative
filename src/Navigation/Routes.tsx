import { StackScreenProps } from "@react-navigation/stack";

export enum Routes {
  // Screens
  HOME_SCREEN = "HOME_SCREEN",
  DETAILS_SCREEN = "DETAILS_SCREEN",
  MY_ANNOUNCEMENTS_SCREEN = "MY_ANNOUNCEMENTS_SCREEN",
  SLIDER_FULL_SCREEN = "SLIDER_FULL_SCREEN",
  // Stacks
  HOME_STACK = "HOME_STACK",
  DONATIONS_STACK = "DONATIONS_STACK",
  REQUESTS_STACK = "REQUESTS_STACK",
  MY_ANNOUNCEMENTS_STACK = "MY_ANNOUNCEMENTS_STACK",
  ACCOUNT_SCREEN = "ACCOUNT_SCREEN",
  CREATE_ANNOUNCEMENT_SCREEN = "CREATE_ANNOUNCEMENT_SCREEN",
  MY_DONATIONS_SCREEN = "MY_DONATIONS_SCREEN",
  MY_REQUESTS_SCREEN = "MY_REQUESTS_SCREEN",
}

type RootStackParamList = {
  // Screens
  HOME_SCREEN: undefined;
  DETAILS_SCREEN: undefined;
  MY_ANNOUNCEMENTS_SCREEN: undefined;
  SLIDER_FULL_SCREEN: undefined;

  // Stacks
  HOME_STACK: undefined;
  DONATIONS_STACK: undefined;
  REQUESTS_STACK: undefined;
  MY_ANNOUNCEMENTS_STACK: undefined;
  ACCOUNT_SCREEN: undefined;
  CREATE_ANNOUNCEMENT_SCREEN: undefined;
};
export type ScreenProps = StackScreenProps<RootStackParamList>;
