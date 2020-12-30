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

import MainStack from "../MainStack";
import SearchScreen from "../../Screens/SearchScreen";

const Drawer = createDrawerNavigator();
const SearchDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <SearchScreen {...props} />}
    >
      <Drawer.Screen name="Home" component={MainStack} />
    </Drawer.Navigator>
  );
};

export default SearchDrawerNavigator;
