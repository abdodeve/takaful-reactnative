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
import { Colors } from "./../../../Constants";
import { IconX, ICON_TYPE } from "../../../Icons";

import { UploadedImageType } from "../../../Store/UploadedImages/types";

const deviceHeight = Dimensions.get("window").height;

interface RootState {
  uploadedImagesStore: Array<UploadedImageType>;
}
const mapStateToProps = (state: RootState, ownProps) => ({
  uploadedImages: state.uploadedImagesStore,
  ownProps: ownProps,
});

const connector = connect(mapStateToProps);
type Props = any;

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

const renderFullNameIcon = (props) => (
  <IconX name="user" size={20} origin={ICON_TYPE.ANT_ICON} />
);
const renderEmailIcon = (props) => (
  <IconX name="mail" size={20} origin={ICON_TYPE.ANT_ICON} />
);
const renderPhoneIcon = (props) => (
  <IconX name="phone" size={20} origin={ICON_TYPE.ANT_ICON} />
);
const RequiredSign = (props) => <Text style={styles.requiredSign}>*</Text>;

/**
 * Four
 *
 */
const Four: React.FC<Props> = ({ setDataStepFour, dataStepFour }: Props) => {
  const [fullname, setFullname] = useState(dataStepFour.fullname);
  const [email, setEmail] = useState(dataStepFour.email);
  const [phone, setPhone] = useState(dataStepFour.phone);

  useEffect(() => {
    setDataStepFour({ fullname, email, phone });
    return () => {
      // cleanup
    };
  }, [fullname, email, phone]);

  return (
    <View style={[styles.container]}>
      <View style={styles.inputsView}>
        <Text style={styles.title}>
          Nom complet
          <RequiredSign />
        </Text>
        <Input
          status="basic"
          placeholder="Entrez le nom complet"
          value={fullname}
          // onChangeText={setFullname}
          onChangeText={(nextValue) => {
            setFullname(nextValue);
          }}
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
          value={email}
          onChangeText={setEmail}
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
          value={phone}
          onChangeText={setPhone}
          accessoryLeft={renderPhoneIcon}
          keyboardType="phone-pad"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  cityInput: { marginBottom: 40 },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  inputsView: {
    marginBottom: 10,
  },
  requiredSign: { color: Colors.danger },
  inputDescription: { minHeight: 130, textAlignVertical: "top" },
});

export default connector(Four);
