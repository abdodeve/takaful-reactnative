import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, Input, Button, useTheme } from "@ui-kitten/components";

import GoBack from "./../../Components/Shared/GoBack";
import { IconX, ICON_TYPE } from "../../Icons";
import { Colors } from "./../../Constants";
import SearchHeader from "./../../Components/Search/SearchHeader";

export const PhoneIcon = () => (
  <IconX name="phone" color="#fff" origin={ICON_TYPE.FEATHER_ICONS} />
);

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

const SearchMain = (props) => {
  const primaryInputState = useInputState();
  const theme = useTheme();

  return (
    <ScrollView style={styles.mainContent}>
      <Text>Pousette double en bon état</Text>
      <Text>Pousette double en bon état</Text>
      <Text>Pousette double en bon état</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContent: { backgroundColor: Colors.tintColor },
});

export default SearchMain;
