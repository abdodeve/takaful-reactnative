import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import AnnouncementsList from "../Components/AnnouncementsList";

import { ScreenProps } from "../Navigation/Routes";

const HomeScreen: React.FC<ScreenProps> = ({
  route,
  navigation,
}: ScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <AnnouncementsList navigation={navigation} route={route} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
