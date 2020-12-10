import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

import { Routes, ScreenProps } from "../Navigation/Routes";
import { IconX, ICON_TYPE } from "../Icons";

const HomeScreen: React.FC<ScreenProps> = ({
  route,
  navigation,
}: ScreenProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home screen</Text>
      <TouchableOpacity onPress={() => {}}>
        <View>
          <IconX
            name="right"
            origin={ICON_TYPE.ANT_ICON}
            color="#aaaaaa"
            style={{ color: "black" }}
          />
          <Text>Search</Text>
        </View>
      </TouchableOpacity>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(Routes.DETAILS_SCREEN)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: "white",
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});

export default HomeScreen;
