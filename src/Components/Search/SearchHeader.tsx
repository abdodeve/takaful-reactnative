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

export const PhoneIcon = () => (
  <IconX name="phone" color="#fff" origin={ICON_TYPE.FEATHER_ICONS} />
);

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

const SearchHeader = (props) => {
  const primaryInputState = useInputState();
  const theme = useTheme();

  return (
    <View style={styles.header}>
      <View style={styles.topRow}>
        <View style={styles.filter}>
          <Text>Filtrer</Text>
        </View>
        <View>
          <Text>Réinitialiser</Text>
        </View>
      </View>
      <View style={styles.searchInputView}>
        <View>
          <Input
            style={[styles.SearchInput]}
            status="primary"
            placeholder="Primary"
            {...primaryInputState}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#fff",
    height: "15%",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
  filter: {
    marginTop: 8,
    marginLeft: 60,
  },
  searchInputView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  SearchInput: {
    flex: 1,
    margin: 2,
    width: "95%",
  },
});

export default SearchHeader;
