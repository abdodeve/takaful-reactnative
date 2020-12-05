import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "../Routes";
import HomeScreen from "../../Screens/HomeScreen";
import DetailsScreen from "../../Screens/DetailsScreen";
import MyAnnouncementsScreen from "../../Screens/MyAnnouncementsScreen";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
      <HomeStack.Screen
        name={Routes.DETAILS_SCREEN}
        component={DetailsScreen}
      />
      <HomeStack.Screen
        name={Routes.MY_ANNOUNCEMENTS_SCREEN}
        component={MyAnnouncementsScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
