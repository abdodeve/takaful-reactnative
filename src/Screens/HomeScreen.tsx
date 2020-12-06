import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { Routes, ScreenProps } from "../Navigation/Routes";
import { IconX, ICON_TYPE } from "../Icons";

const HomeScreen: React.FC<ScreenProps> = ({
  route,
  navigation,
}: ScreenProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home screen</Text>
      <IconX
        name="right"
        origin={ICON_TYPE.ANT_ICON}
        color="#aaaaaa"
        style={{ color: "black" }}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(Routes.DETAILS_SCREEN)}
      />
    </View>
  );
};

export default HomeScreen;
