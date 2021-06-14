import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import {
  Image,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import {
  Text,
  Input,
  useTheme,
  Avatar,
  Divider,
  Button,
} from "@ui-kitten/components";
import * as Google from "expo-google-app-auth";
import { Colors } from "./../../Constants";
import { IconX, ICON_TYPE } from "../../Icons";
import { logInAction, logInAsyncAction } from "../../Store/IsLoggedIn/actions";
import { userDataType } from "../../Store/UserData/types";

const deviceHeight = Dimensions.get("window").height;

interface RootState {
  isLoggedInStore: boolean;
  userDataStore: userDataType;
}
const mapStateToProps = (state: RootState, ownProps) => ({
  isLoggedInStore: state.isLoggedInStore,
  userDataStore: state.userDataStore,
  ownProps: ownProps,
});

const mapDispatchToProps = (dispatch) => {
  return {
    logInAction: (isLoggedIn: boolean) => {
      dispatch(logInAction(isLoggedIn));
    },
    logInAsyncAction: (isLoggedIn: boolean) => {
      dispatch(logInAsyncAction(isLoggedIn));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const renderGmailIcon = () => (
  <IconX
    name="gmail"
    size={25}
    origin={ICON_TYPE.MATERIAL_COMMUNITY}
    color="#fff"
  />
);

/**
 * SignIn
 *
 */
const SignIn: React.FC<Props> = ({
  isLoggedInStore,
  userDataStore,
  logInAction,
  logInAsyncAction,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.mainWrapper]}>
        <View style={styles.introduction}>
          <Avatar
            size="giant"
            source={require("../../../assets/screen-images/welcome-icon.png")}
          />
          <Text style={styles.title}>Bienvenue</Text>
        </View>
        <Text category="p2">
          <Text style={styles.appName}>Takaful</Text>, c'est la premiere
          solution de dons au Maroc
        </Text>
        <View style={styles.divider} />
        <View style={styles.signInBlock}>
          <Text style={styles.connectText}>Connexion</Text>
          <Button
            accessoryLeft={renderGmailIcon}
            style={styles.installButton}
            onPress={async () => {
              logInAsyncAction(!isLoggedInStore);
            }}
          >
            SE CONNECTER AVEC GMAIL
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  mainWrapper: {
    marginHorizontal: 15,
    marginTop: 20,
    flex: 1,
  },
  signUpBtn: {
    width: "100%",
    position: "absolute",
    bottom: 130,
  },
  appName: { fontWeight: "bold" },
  introduction: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  title: {
    marginHorizontal: 10,
    fontSize: 20,
  },
  installButton: {
    marginVertical: 4,
    width: "100%",
  },
  divider: {
    marginVertical: 5,
    borderBottomColor: "#95a5a6",
    borderBottomWidth: 1,
  },
  signInBlock: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  connectText: { fontSize: 30, fontWeight: "bold" },
});

export default connector(SignIn);
