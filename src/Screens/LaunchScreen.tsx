import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { ScreenProps } from "../Navigation/Routes";

const LaunchScreen: React.FC<ScreenProps> = ({
  route,
  navigation,
}: ScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Launch Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default LaunchScreen;
