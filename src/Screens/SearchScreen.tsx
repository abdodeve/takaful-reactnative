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

import GoBack from "./../Components/Shared/GoBack";
import { IconX, ICON_TYPE } from "../Icons";
import { Colors } from "./../Constants";
import SearchHeader from "./../Components/Search/SearchHeader";
import SearchMain from "./../Components/Search/SearchMain";
import SearchBtn from "./../Components/Search/SearchBtn";

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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container]}>
        <GoBack route={props.route} navigation={props.navigation} />
        <SearchHeader />
        <SearchMain />
        <SearchBtn />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchScreen;
