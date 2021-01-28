import React, { useState } from "react";
import { View, useWindowDimensions, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Account from "./../Components/Account";
import SignIn from "./../Components/SignIn";
import { ScreenProps } from "../Navigation/Routes";

const AccountScreen: React.FC<ScreenProps> = ({
  route,
  navigation,
}: ScreenProps) => {
  const isLoggedIn = false;
  return (
    <View style={styles.container}>
      <View>{isLoggedIn ? <Account /> : <SignIn />}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AccountScreen;
