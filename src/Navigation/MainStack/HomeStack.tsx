import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "../Routes";
import HomeScreen from "../../Screens/HomeScreen";
import DetailsScreen from "../../Screens/DetailsScreen";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
      <HomeStack.Screen
        name={Routes.DETAILS_SCREEN}
        component={DetailsScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
