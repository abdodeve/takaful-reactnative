import React from "react";
import { Text, View, Button } from "react-native";

import { Routes, ScreenProps } from "../Navigation/Routes";
import { IconX, ICON_TYPE } from "../Icons";

const MyAnnouncementsScreen: React.FC<ScreenProps> = ({
  route,
  navigation,
}: ScreenProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>MyAnnouncementsScreen!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(Routes.DETAILS_SCREEN)}
      />
    </View>
  );
};

export default MyAnnouncementsScreen;
