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

const SearchScreen = (props) => {
  const primaryInputState = useInputState();
  const theme = useTheme();

  return (
    <View style={styles.searchBtnView}>
      <View>
        <TouchableOpacity
          style={[
            styles.searchTouchable,
            {
              backgroundColor: theme["color-primary-500"],
            },
          ]}
          onPress={() => {
            console.log("Validate");
          }}
        >
          <View style={styles.searchTextIcon}>
            <IconX
              name="search"
              origin={ICON_TYPE.OCTICONS}
              color="#fff"
              style={{ marginRight: 10 }}
            />
            <Text style={styles.searchText}>RECHERCHER</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBtnView: {
    backgroundColor: "#fff",
    height: "10%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchTouchable: {
    padding: 10,
    borderRadius: 6,
    width: Dimensions.get("window").width * 0.95,
  },
  searchTextIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchText: { color: "#fff", fontSize: 20 },
});

export default SearchScreen;
