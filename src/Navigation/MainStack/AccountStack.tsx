import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Layout, Text, useTheme } from "@ui-kitten/components";

import { Routes } from "../Routes";
import TitleHeader from "./../../Components/Shared/TitleHeader";
import AccountScreen from "../../Screens/AccountScreen";

const AccountStackNavigator = createStackNavigator();

const AccountStack = () => {
  return (
    <AccountStackNavigator.Navigator screenOptions={{}}>
      <AccountStackNavigator.Screen
        options={{
          headerTitle: () => <TitleHeader title="Compte" />,
          headerStyle: {
            elevation: 1,
          },
        }}
        name="MyAnnouncementsNavigatorScreen"
        component={AccountScreen}
      />
    </AccountStackNavigator.Navigator>
  );
};

export default AccountStack;

const styles = StyleSheet.create({
  title: { fontWeight: "bold", fontSize: 18 },
});
