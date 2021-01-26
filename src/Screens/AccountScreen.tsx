import React, { useState } from "react";
import { View, useWindowDimensions, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Account from "./../Components/Account";
import { ScreenProps } from "../Navigation/Routes";

const AccountScreen: React.FC<ScreenProps> = ({
  route,
  navigation,
}: ScreenProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Account />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AccountScreen;
