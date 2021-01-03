import React, { useState } from "react";
import { View, useWindowDimensions, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ScreenProps } from "../Navigation/Routes";

const CreateAnnouncementScreen: React.FC<ScreenProps> = ({
  route,
  navigation,
}: ScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text>Create Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default CreateAnnouncementScreen;
