import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { ScreenProps } from "../Navigation/Routes";

const HomeScreen: React.FC<ScreenProps> = ({
  route,
  navigation,
}: ScreenProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("DETAILS_SCREEN")}
      />
    </View>
  );
};

export default HomeScreen;
