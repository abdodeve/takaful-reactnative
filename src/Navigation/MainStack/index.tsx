import React from "react";
import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Layout, Text, useTheme } from "@ui-kitten/components";

import { IconX, ICON_TYPE } from "../../Icons";
import HomeStack from "./HomeStack";
import MyAnnouncementsStack from "./MyAnnouncementsStack";
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
        name={Routes.HOME_STACK}
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
        initialParams={navigation}
      />
      <Tab.Screen
        name="Demandes"
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
              name="hand-point-up"
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
        name="Créer"
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
        }}
        component={MyAnnouncementsStack}
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
        name="Compte"
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
        component={MyAnnouncementsStack}
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
