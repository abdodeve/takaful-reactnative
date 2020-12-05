import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { Routes, ScreenProps } from "../Navigation/Routes";

const HomeScreen: React.FC<ScreenProps> = ({
  route,
  navigation,
}: ScreenProps) => {
  const routeD = "DETAILS_SCREEN";
  const routeD2: string = Routes.DETAILS_SCREEN;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(Routes.DETAILS_SCREEN)}
      />
    </View>
  );
};

export default HomeScreen;
