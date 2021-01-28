import React, { useState } from "react";
import { View, useWindowDimensions, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";

import Account from "./../Components/Account";
import SignIn from "./../Components/SignIn";
import { ScreenProps } from "../Navigation/Routes";
import { logInAction } from "../Store/IsLoggedIn/actions";

interface RootState {
  isLoggedInStore: boolean;
}
const mapStateToProps = (state: RootState, ownProps) => ({
  isLoggedInStore: state.isLoggedInStore,
  ownProps: ownProps,
});

const connector = connect(mapStateToProps);
type Props = ScreenProps & ReturnType<typeof mapStateToProps>;

/**
 * AccountScreen
 * @param ScreenProps
 */
const AccountScreen: React.FC<Props> = ({
  isLoggedInStore,
  route,
  navigation,
}: Props) => {
  return (
    <View style={styles.container}>
      <View>{isLoggedInStore ? <Account /> : <SignIn />}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connector(AccountScreen);
