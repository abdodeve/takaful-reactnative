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
import HomeScreen from "../../Screens/HomeScreen";
import MyAnnouncementsScreen from "../../Screens/MyAnnouncementsScreen";
import { IconX, ICON_TYPE } from "../../Icons";

const HomeStackNavigator = createStackNavigator();

function LogoTitle() {
  return (
    <View>
      <Image source={require("./../../../assets/logos/logo-takaful-2.png")} />
    </View>
  );
}

const HomeStack = ({ navigation }) => {
  return (
    <HomeStackNavigator.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <HomeStackNavigator.Screen
        name={Routes.HOME_SCREEN}
        component={HomeScreen}
        options={{
          headerTitle: (props: any) => <LogoTitle {...props} />,
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
      <HomeStackNavigator.Screen
        name={Routes.MY_ANNOUNCEMENTS_SCREEN}
        component={MyAnnouncementsScreen}
      />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStack;
