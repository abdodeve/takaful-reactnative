import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Button,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Layout, Text, useTheme } from "@ui-kitten/components";

import { Routes } from "../Routes";
import AnnouncementsListScreen from "../../Screens/AnnouncementsListScreen";
import { IconX, ICON_TYPE } from "../../Icons";

const HomeStackNavigator = createStackNavigator();

function LogoTitle() {
  return (
    <View>
      <Image
        source={require("./../../../assets/logos/logo-main.png")}
        style={{ resizeMode: "contain", width: 100 }}
      />
    </View>
  );
}

const HomeStack = ({ navigation, route }) => {
  return (
    <HomeStackNavigator.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <HomeStackNavigator.Screen
        name={Routes.HOME_SCREEN}
        initialParams={{ announcementType: route.params.announcementType }}
        component={AnnouncementsListScreen}
        options={{
          headerTitle: () => <LogoTitle />,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.openDrawer();
              }}
            >
              <View>
                <IconX
                  name="search"
                  origin={ICON_TYPE.OCTICONS}
                  style={{ marginRight: 15 }}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStack;
