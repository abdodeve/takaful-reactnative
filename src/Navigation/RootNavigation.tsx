/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "./Routes";
import MainStack from "./MainStack";
import LaunchScreen from "./../Screens/LaunchScreen";
import DetailsScreen from "../Screens/DetailsScreen";

const Stack = createStackNavigator();

export default function RootNavigation() {
  const APP_STATE = true;
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name={Routes.HOME_SCREEN} component={MainStack} />
        <Stack.Screen name={Routes.DETAILS_SCREEN} component={DetailsScreen} />
        {/* {APP_STATE === true ? (
          <Stack.Screen name={Routes.HOME_SCREEN} component={MainStack} />
          <Stack.Screen name={Routes.DETAILS_SCREEN} component={DetailsScreen} />
        ) : (
          <Stack.Screen name="LAUNCH_SCREEN" component={LaunchScreen} />
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
