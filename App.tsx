import * as React from "react";
import { Button, Text, View } from "react-native";
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

function DetailsScreen({ route, navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ route, navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function SettingsScreen({ route, navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function TopTabScreen({ route, navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>TopTab screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

const TopTabStack = createStackNavigator();
const TopTabNavigator = createMaterialTopTabNavigator();

function TopTabNavigatorScreen() {
  return (
    <TopTabNavigator.Navigator>
      <TopTabNavigator.Screen name="TopTab" component={TopTabScreen} />
      <TopTabNavigator.Screen name="Details" component={DetailsScreen} />
    </TopTabNavigator.Navigator>
  );
}

function TopTabStackScreen() {
  return (
    <TopTabStack.Navigator>
      <TopTabStack.Screen name="Home" component={TopTabNavigatorScreen} />
    </TopTabStack.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
        <Tab.Screen name="TopTab" component={TopTabStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
