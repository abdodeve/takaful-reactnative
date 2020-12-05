import { StackScreenProps } from "@react-navigation/stack";

export enum Routes {
  // Screens
  HOME_SCREEN = "HOME_SCREEN",
  DETAILS_SCREEN = "DETAILS_SCREEN",
  MY_ANNOUNCEMENTS_SCREEN = "MY_ANNOUNCEMENTS_SCREEN",
  // Stacks
  HOME_STACK = "HOME_STACK",
  MY_ANNOUNCEMENTS_STACK = "MY_ANNOUNCEMENTS_STACK",
}

export const routeDetails = ["DETAILS_SCREEN", "123"];

type RootStackParamList = {
  // Screens
  HOME_SCREEN: undefined;
  DETAILS_SCREEN: undefined;
  MY_ANNOUNCEMENTS_SCREEN: undefined;
  // Stacks
  HOME_STACK: undefined;
  MY_ANNOUNCEMENTS_STACK: undefined;
};
export type ScreenProps = StackScreenProps<RootStackParamList>;
