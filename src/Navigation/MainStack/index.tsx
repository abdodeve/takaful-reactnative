import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Layout, Text, useTheme } from "@ui-kitten/components";

import { IconX, ICON_TYPE } from "../../Icons";
import HomeStack from "./HomeStack";
import MyAnnouncementsStack from "./MyAnnouncementsStack";
import AccountStack from "./AccountStack";
import AccountScreen from "../../Screens/AccountScreen";
import CreateAnnouncementScreen from "../../Screens/CreateAnnouncementScreen";
import { Routes } from "./../Routes";

const Tab = createBottomTabNavigator();

export default ({ navigation }) => {
  const theme = useTheme();
  const activeTintColor = theme["color-primary-500"];
  const inactiveTintColor = theme["color-basic-600"];

  return (
    <Tab.Navigator
      initialRouteName="Main"
      tabBarOptions={{
        activeTintColor: activeTintColor,
        inactiveTintColor: inactiveTintColor,
      }}
    >
      <Tab.Screen
        name={Routes.DONATIONS_STACK}
        options={{
          tabBarLabel: (props) => {
            return (
              <Text style={[styles.tabBarLabel, { color: props.color }]}>
                Dons
              </Text>
            );
          },
          tabBarIcon: ({ color, size }) => (
            <IconX
              name="gift"
              color={color}
              size={size}
              origin={ICON_TYPE.FONT_AWESOME5}
              style={{}}
            />
          ),
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name={Routes.REQUESTS_STACK}
        options={{
          tabBarLabel: (props) => {
            return (
              <Text style={[styles.tabBarLabel, { color: props.color }]}>
                Demandes
              </Text>
            );
          },
          tabBarIcon: ({ color, size }) => (
            <IconX
              name="hand-holding-heart"
              color={color}
              size={size}
              origin={ICON_TYPE.FONT_AWESOME5}
              style={{}}
            />
          ),
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name={Routes.CREATE_ANNOUNCEMENT_SCREEN}
        options={{
          tabBarLabel: (props) => {
            return (
              <Text style={[styles.tabBarLabel, { color: props.color }]}>
                Créer
              </Text>
            );
          },
          tabBarIcon: ({ color, size }) => (
            <IconX
              name="add-box"
              color={color}
              size={size + 14}
              origin={ICON_TYPE.MATERIAL_ICONS}
              style={{}}
            />
          ),
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              activeOpacity={1}
              onPress={() => {
                navigation.navigate(Routes.CREATE_ANNOUNCEMENT_SCREEN);
              }}
            />
          ),
        }}
        component={CreateAnnouncementScreen}
      />
      <Tab.Screen
        name={Routes.MY_ANNOUNCEMENTS_STACK}
        options={{
          tabBarLabel: (props) => {
            return (
              <Text style={[styles.tabBarLabel, { color: props.color }]}>
                Mes annonces
              </Text>
            );
          },
          tabBarIcon: ({ color, size }) => (
            <IconX
              name="bullhorn"
              color={color}
              size={size}
              origin={ICON_TYPE.FONT_AWESOME}
              style={{}}
            />
          ),
        }}
        component={MyAnnouncementsStack}
      />
      <Tab.Screen
        name={Routes.ACCOUNT_SCREEN}
        options={{
          tabBarLabel: (props) => {
            return (
              <Text style={[styles.tabBarLabel, { color: props.color }]}>
                Compte
              </Text>
            );
          },
          tabBarIcon: ({ color, size }) => (
            <IconX
              name="user"
              color={color}
              size={size}
              origin={ICON_TYPE.FONT_AWESOME}
              style={{}}
            />
          ),
        }}
        component={AccountStack}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
