import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { ScreenProps } from "../../Navigation/Routes";
import { IconX, ICON_TYPE } from "../../Icons";

export const PhoneIcon = () => (
  <IconX name="phone" color="#fff" origin={ICON_TYPE.FEATHER_ICONS} />
);

const GoBack: React.FC<ScreenProps> = ({ route, navigation }: ScreenProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableCall}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <IconX name="md-arrow-back" color="#fff" origin={ICON_TYPE.IONICONS} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 4,
    left: 4,
    zIndex: 200,
  },
  touchableCall: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 50,
  },
});

export default GoBack;
