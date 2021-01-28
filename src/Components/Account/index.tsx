import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Button,
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
import { Text, Input, useTheme } from "@ui-kitten/components";
import { Colors } from "./../../Constants";
import { IconX, ICON_TYPE } from "../../Icons";

import { UploadedImageType } from "../../Store/UploadedImages/types";
import BottomBLock from "./BottomBLock";
import SignOutBtn from "./SignOutBtn";
import { logInAction } from "../../Store/IsLoggedIn/actions";

const deviceHeight = Dimensions.get("window").height;

interface RootState {
  UploadedImagesStore: Array<UploadedImageType>;
  isLoggedInStore: boolean;
}
const mapStateToProps = (state: RootState, ownProps) => ({
  isLoggedInStore: state.isLoggedInStore,
  ownProps: ownProps,
});

const mapDispatchToProps = (dispatch) => {
  return {
    logInAction: (isLoggedIn: boolean) => {
      dispatch(logInAction(isLoggedIn));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

const renderFullNameIcon = () => (
  <IconX name="user" size={20} origin={ICON_TYPE.ANT_ICON} />
);
const renderEmailIcon = () => (
  <IconX name="mail" size={20} origin={ICON_TYPE.ANT_ICON} />
);
const renderPhoneIcon = () => (
  <IconX name="phone" size={20} origin={ICON_TYPE.ANT_ICON} />
);
const RequiredSign = () => <Text style={styles.requiredSign}>*</Text>;

/**
 * Account
 *
 */
const Account: React.FC<Props> = ({ logInAction }) => {
  const fullNameInputState = useInputState("Abdelhadi Ahmed");
  const emaiInputState = useInputState("abdelhadi.deve@gmail.com");
  const phoneInputState = useInputState("0626777317");

  return (
    <View style={styles.container}>
      <View style={[styles.mainWrapper]}>
        <View style={styles.inputsView}>
          <Text style={styles.title}>
            Nom complet
            <RequiredSign />
          </Text>
          <Input
            status="basic"
            placeholder="Entrez le nom complet"
            {...fullNameInputState}
            accessoryLeft={renderFullNameIcon}
          />
        </View>
        <View style={styles.inputsView}>
          <Text style={styles.title}>
            Email
            <RequiredSign />
          </Text>
          <Input
            status="basic"
            placeholder="Entrez l'email"
            {...emaiInputState}
            accessoryLeft={renderEmailIcon}
            disabled
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputsView}>
          <Text style={styles.title}>
            Télephone
            <RequiredSign />
          </Text>
          <Input
            status="basic"
            placeholder="Entrez le télephone"
            {...phoneInputState}
            accessoryLeft={renderPhoneIcon}
            keyboardType="phone-pad"
          />
        </View>
      </View>
      <View style={styles.signUpBtn}>
        <SignOutBtn />
      </View>
      <View style={styles.BottomBtns}>
        <BottomBLock />
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
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  inputsView: {
    marginBottom: 10,
  },
  signUpBtn: {
    width: "100%",
    position: "absolute",
    bottom: 130,
  },
  BottomBtns: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  requiredSign: { color: Colors.danger },
});

export default connector(Account);
