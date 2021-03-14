import React, { useState } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Text, Input, Button, useTheme } from "@ui-kitten/components";
import * as firebase from "firebase";

import { IconX, ICON_TYPE } from "../../Icons";
import { logInAction } from "../../Store/IsLoggedIn/actions";
import { setUserDataAction } from "../../Store/UserData/actions";
import { userDataType } from "../../Store/UserData/types";

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
    setUserDataAction: (userData: userDataType) => {
      dispatch(setUserDataAction(userData));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const SignOutBtn: React.FC<Props> = ({
  logInAction,
  setUserDataAction,
  userDataStore,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={[styles.signOutTouchable]}
          onPress={() => {
            // Clear singIn data from redux store
            logInAction(false);
            setUserDataAction(false);
            // SignOut From Firebase
            firebase
              .auth()
              .signOut()
              .then(() => {
                // Sign-out successful.
                console.log("Sign-out successful.");
              })
              .catch((error) => {
                // An error happened.
                console.error("signOut===>", "An error happened.", error);
              });
          }}
        >
          <View style={styles.signOutTextIcon}>
            <View style={styles.viewLeft}>
              <IconX
                name="logout"
                origin={ICON_TYPE.ANT_ICON}
                color="#000"
                size={20}
                style={{ marginRight: 25 }}
              />
              <Text style={styles.signOutText}>Se déconnecter</Text>
            </View>
            <View style={styles.iconRight}>
              <IconX
                name="arrow-forward"
                origin={ICON_TYPE.MATERIAL_ICONS}
                color="#000"
                size={20}
                style={{ marginRight: 10 }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signOutTouchable: {
    padding: 15,
    width: Dimensions.get("window").width * 0.95,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
  },
  signOutTextIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signOutText: { color: "#000", fontSize: 18, fontWeight: "bold" },
  viewLeft: {
    flex: 2,
    alignItems: "center",
    flexDirection: "row",
  },
  iconRight: {
    alignItems: "flex-end",
    flex: 1,
  },
});

export default connector(SignOutBtn);
