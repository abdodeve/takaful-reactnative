import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import { Routes } from "../Routes";
import HomeScreen from "../../Screens/HomeScreen";
import DetailsScreen from "../../Screens/DetailsScreen";
import MyAnnouncementsScreen from "../../Screens/MyAnnouncementsScreen";
import { IconX, ICON_TYPE } from "../../Icons";

const HomeStack = createStackNavigator();

function LogoTitle() {
  return (
    // <View style={{ backgroundColor: "yellow" }}>
    <View>
      <Image
        // style={{ width: 150, height: 30 }}
        source={require("./../../../assets/logos/logo-takaful-2.png")}
      />
    </View>
  );
}

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <HomeStack.Screen
        name={Routes.HOME_SCREEN}
        component={HomeScreen}
        options={{
          headerTitle: (props: any) => <LogoTitle {...props} />,
          headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
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
      <HomeStack.Screen
        name={Routes.DETAILS_SCREEN}
        component={DetailsScreen}
      />
      <HomeStack.Screen
        name={Routes.MY_ANNOUNCEMENTS_SCREEN}
        component={MyAnnouncementsScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
