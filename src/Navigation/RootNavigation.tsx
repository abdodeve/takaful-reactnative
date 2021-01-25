/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { Routes } from "./Routes";
import SearchDrawerNavigator from "./Drawers/SearchDrawerNavigator";
import LaunchScreen from "./../Screens/LaunchScreen";
import DetailsScreen from "../Screens/DetailsScreen";
import CreateAnnouncementScreen from "../Screens/CreateAnnouncementScreen";
import SliderFullScreen from "../Screens/SliderFullScreen";

const Stack = createStackNavigator();
export default function RootNavigation() {
  const APP_STATE = true;
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Routes.HOME_SCREEN}
          headerMode="none"
        >
          {APP_STATE === true ? (
            <>
              <Stack.Screen
                name={Routes.HOME_SCREEN}
                component={SearchDrawerNavigator}
              />
              <Stack.Screen
                name={Routes.DETAILS_SCREEN}
                component={DetailsScreen}
              />
              <Stack.Screen
                name={Routes.SLIDER_FULL_SCREEN}
                component={SliderFullScreen}
              />
              <Stack.Screen
                name={Routes.CREATE_ANNOUNCEMENT_SCREEN}
                component={CreateAnnouncementScreen}
              />
            </>
          ) : (
            <Stack.Screen name="LAUNCH_SCREEN" component={LaunchScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
