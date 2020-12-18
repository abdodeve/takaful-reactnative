/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Layout, Text, useTheme } from "@ui-kitten/components";

import { IconX, ICON_TYPE } from "../../Icons";
import HomeStack from "./HomeStack";
import MyAnnouncementsStack from "./MyAnnouncementsStack";
import { Routes } from "./../Routes";

const Tab = createBottomTabNavigator();

export default () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Main"
      tabBarOptions={{
        activeTintColor: theme["color-primary-500"],
        inactiveTintColor: theme["color-basic-600"],
      }}
    >
      <Tab.Screen
        name={Routes.HOME_STACK}
        options={{
          tabBarLabel: "Dons",
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
        name="Demandes"
        options={{
          tabBarLabel: "Demandes",
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
          tabBarLabel: "Créer",
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
          tabBarLabel: "Mes annonces",
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
          tabBarLabel: "Compte",
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
