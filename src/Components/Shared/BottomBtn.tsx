import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Text, Input, Button, useTheme } from "@ui-kitten/components";
import { IconX, ICON_TYPE } from "../../Icons";

const BottomBtn = ({ title, onPress, color, IconBtn }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.bottomTouchable,
        {
          backgroundColor: color,
        },
      ]}
      onPress={onPress}
    >
      <View style={styles.bottomTextIcon}>
        <>{IconBtn}</>
        <Text style={styles.bottomText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bottomBtnView: {
    backgroundColor: "#fff",
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  bottomTouchable: {
    padding: 15,
    borderRadius: 6,
  },
  bottomTextIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

export default BottomBtn;
