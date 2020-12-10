/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./HomeStack";
import MyAnnouncementsStack from "./MyAnnouncementsStack";
import { Routes } from "./../Routes";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Routes.HOME_STACK}
        options={{
          title: "Dons",
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="Demandes"
        options={{
          title: "Demandes",
        }}
        component={HomeStack}
      />
      <Tab.Screen name="Créer" component={MyAnnouncementsStack} />
      <Tab.Screen
        name={Routes.MY_ANNOUNCEMENTS_STACK}
        options={{
          title: "Mes annonces",
        }}
        component={MyAnnouncementsStack}
      />
      <Tab.Screen name="Compte" component={MyAnnouncementsStack} />
    </Tab.Navigator>
  );
};
