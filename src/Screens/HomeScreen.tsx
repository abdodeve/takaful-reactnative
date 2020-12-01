import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  TopTab: undefined;
};
type Props = StackScreenProps<RootStackParamList>;

const HomeScreen: React.FC<Props> = ({ route, navigation }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default HomeScreen;
