import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Layout, Text, useTheme } from "@ui-kitten/components";

import { Routes } from "../Routes";
import TitleHeader from "./../../Components/Shared/TitleHeader";
import AnnouncementsListScreen from "../../Screens/AnnouncementsListScreen";

const MyAnnouncementsStack = createStackNavigator();
const MyAnnouncementsTabNavigator = createMaterialTopTabNavigator();

const MyAnnouncementsNavigatorScreen = () => {
  return (
    <MyAnnouncementsTabNavigator.Navigator>
      <MyAnnouncementsTabNavigator.Screen
        name={Routes.MY_DONATIONS_SCREEN}
        component={AnnouncementsListScreen}
        options={{
          tabBarLabel: (props) => {
            return <Text style={[{ color: props.color }]}>Dons</Text>;
          },
        }}
      />
      <MyAnnouncementsTabNavigator.Screen
        name={Routes.MY_REQUESTS_SCREEN}
        component={AnnouncementsListScreen}
        options={{
          tabBarLabel: (props) => {
            return <Text style={[{ color: props.color }]}>Demandes</Text>;
          },
        }}
      />
    </MyAnnouncementsTabNavigator.Navigator>
  );
};

const MyAnnouncementsStackScreen = () => {
  return (
    <MyAnnouncementsStack.Navigator screenOptions={{}}>
      <MyAnnouncementsStack.Screen
        options={{
          headerTitle: (props: any) => <TitleHeader title="Mes annonces" />,
          headerStyle: {
            elevation: 1,
          },
        }}
        name="MyAnnouncementsNavigatorScreen"
        component={MyAnnouncementsNavigatorScreen}
      />
    </MyAnnouncementsStack.Navigator>
  );
};

export default MyAnnouncementsStackScreen;

const styles = StyleSheet.create({
  title: { fontWeight: "bold", fontSize: 18 },
});
