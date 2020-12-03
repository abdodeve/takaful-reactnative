import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { ScreenProps } from "../Navigation/Routes";

const LaunchScreen: React.FC<ScreenProps> = ({
  route,
  navigation,
}: ScreenProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Launch Screen</Text>
    </View>
  );
};

export default LaunchScreen;
