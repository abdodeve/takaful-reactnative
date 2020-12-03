/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import MainStack from "./MainStack";
import LaunchScreen from "./../Screens/LaunchScreen";

const Stack = createStackNavigator();

export default function RootNavigation() {
  const APP_STATE = true;
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {APP_STATE === true ? (
          <Stack.Screen name="HOME_SCREEN" component={MainStack} />
        ) : (
          <Stack.Screen name="HOME_SCREEN" component={LaunchScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
