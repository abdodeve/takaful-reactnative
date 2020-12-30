import React, { useState, useEffect, useRef } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import ImageViewer from "react-native-image-zoom-viewer";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { ScreenProps, Routes } from "../Navigation/Routes";
import GoBack from "./../Components/Shared/GoBack";

const Drawer = createDrawerNavigator();

const SearchScreen = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => console.log("https://mywebsite.com/help")}
      />
      {/* <Button title="Click" onPress={() => {}} /> */}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: -15,
    alignSelf: "center",
  },
  dot: {
    color: "#888",
    fontSize: 50,
  },
  activeDot: {
    color: "#FFF",
    fontSize: 50,
  },
});

export default SearchScreen;
