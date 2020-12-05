/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./HomeStack";
import MyAnnouncementsStack from "./MyAnnouncementsStack";
import { Routes } from "./../Routes";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Routes.HOME_STACK} component={HomeStack} />
      <Tab.Screen
        name={Routes.MY_ANNOUNCEMENTS_STACK}
        component={MyAnnouncementsStack}
      />
      <Tab.Screen name="TempTestStack" component={MyAnnouncementsStack} />
    </Tab.Navigator>
  );
};
