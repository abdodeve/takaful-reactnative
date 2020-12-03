import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { ScreenProps } from "../Navigation/Routes";

const MyAnnouncementsScreen: React.FC<ScreenProps> = ({
  route,
  navigation,
}: ScreenProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details!</Text>
    </View>
  );
};

export default MyAnnouncementsScreen;
