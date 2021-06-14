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
import { userDataType } from "../../Store/UserData/types";
import { User } from "../../Models";
import { store } from "../../../App";

const deviceHeight = Dimensions.get("window").height;

interface RootState {
  uploadedImagesStore: Array<UploadedImageType>;
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
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

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
const Account: React.FC<Props> = ({ logInAction, userDataStore }) => {
  const [userValues, setUserValues] = useState<User>(userDataStore as User);

  useEffect(() => {
    setUserValues(userDataStore as User);
    return () => {};
  }, [userDataStore]);

  const changeHandler = ({ name, value }) => {
    setUserValues({ ...userValues, [name]: value });
  };

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
            accessoryLeft={renderFullNameIcon}
            value={userValues.fullName}
            onChangeText={(text) => {
              changeHandler({ name: "fullName", value: text });
            }}
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
            value={userValues.email}
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
            value={userValues.phone}
            onChangeText={(text) => {
              changeHandler({ name: "phone", value: text });
            }}
            accessoryLeft={renderPhoneIcon}
            keyboardType="phone-pad"
          />
        </View>
      </View>
      <View style={styles.signUpBtn}>
        <SignOutBtn />
      </View>
      <View style={styles.BottomBtns}>
        <BottomBLock userValues={userValues} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
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
    top: 20,
  },
  BottomBtns: {
    width: "100%",
  },
  requiredSign: { color: Colors.danger },
});

export default connector(Account);
