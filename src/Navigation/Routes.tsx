import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";

export const Routes = {
  HOME_SCREEN: "HOME_SCREEN",
  DETAILS_SCREEN: "DETAILS_SCREEN",
  MY_ANNOUNCEMENTS_SCREEN: "MY_ANNOUNCEMENTS_SCREEN",
};

type RootStackParamList = {
  HOME_SCREEN: undefined;
  DETAILS_SCREEN: undefined;
  MY_ANNOUNCEMENTS_SCREEN: undefined;
};
export type ScreenProps = StackScreenProps<RootStackParamList>;
