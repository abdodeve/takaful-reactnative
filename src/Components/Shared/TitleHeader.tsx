import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Layout, Text, useTheme } from "@ui-kitten/components";

const TitleHeader = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: { fontWeight: "bold", fontSize: 18 },
});

export default TitleHeader;
