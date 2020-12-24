import React from "react";
import { Text, View, Button } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Routes, ScreenProps } from "../Navigation/Routes";
import { IconX, ICON_TYPE } from "../Icons";

const MyAnnouncementsScreen: React.FC<ScreenProps> = ({
  route,
  navigation,
}: ScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>MyAnnouncementsScreen!</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate(Routes.DETAILS_SCREEN)}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyAnnouncementsScreen;
