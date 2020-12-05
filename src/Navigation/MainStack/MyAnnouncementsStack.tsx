import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Routes } from "../Routes";
import MyAnnouncementsScreen from "../../Screens/MyAnnouncementsScreen";
import DetailsScreen from "../../Screens/DetailsScreen";

const MyAnnouncementsStack = createStackNavigator();
const MyAnnouncementsTabNavigator = createMaterialTopTabNavigator();

const MyAnnouncementsNavigatorScreen = () => {
  return (
    <MyAnnouncementsTabNavigator.Navigator>
      <MyAnnouncementsTabNavigator.Screen
        name={Routes.MY_ANNOUNCEMENTS_SCREEN}
        component={MyAnnouncementsScreen}
      />
      <MyAnnouncementsTabNavigator.Screen
        name={Routes.DETAILS_SCREEN}
        component={DetailsScreen}
      />
    </MyAnnouncementsTabNavigator.Navigator>
  );
};

const MyAnnouncementsStackScreen = () => {
  return (
    <MyAnnouncementsStack.Navigator>
      <MyAnnouncementsStack.Screen
        name="MyAnnouncementsNavigatorScreen"
        component={MyAnnouncementsNavigatorScreen}
      />
    </MyAnnouncementsStack.Navigator>
  );
};

export default MyAnnouncementsStackScreen;
