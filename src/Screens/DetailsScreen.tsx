import React, { useState } from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { IconX, ICON_TYPE } from "../Icons";
import { ScreenProps } from "../Navigation/Routes";
import Details from "../Components/Details";

export const PhoneIcon = () => (
  <IconX name="phone" color="#fff" origin={ICON_TYPE.FEATHER_ICONS} />
);

const DetailsScreen: React.FC<ScreenProps> = ({
  route,
  navigation,
}: ScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Details route={route} navigation={navigation} />
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

export default DetailsScreen;
