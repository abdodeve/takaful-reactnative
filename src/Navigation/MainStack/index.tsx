/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeStack from "./HomeStack";
import MyAnnouncementsStack from "./MyAnnouncementsStack";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={MyAnnouncementsStack} />
      <Tab.Screen name="TopTab" component={MyAnnouncementsStack} />
    </Tab.Navigator>
  );
};
