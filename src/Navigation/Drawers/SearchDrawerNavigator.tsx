import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dimensions } from "react-native";

import MainStack from "../MainStack";
import SearchScreen from "../../Screens/SearchScreen";

const Drawer = createDrawerNavigator();
const SearchDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <SearchScreen {...props} />}
      drawerStyle={{
        width: Dimensions.get("window").width,
      }}
    >
      <Drawer.Screen name="Home" component={MainStack} />
    </Drawer.Navigator>
  );
};

export default SearchDrawerNavigator;
