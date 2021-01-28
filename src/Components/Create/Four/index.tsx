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
  UploadedImagesStore: Array<UploadedImageType>;
}
const mapStateToProps = (state: RootState, ownProps) => ({
  uploadedImages: state.UploadedImagesStore,
  ownProps: ownProps,
});

const connector = connect(mapStateToProps);
type Props = ReturnType<typeof mapStateToProps>;

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
const Four: React.FC<Props> = ({ uploadedImages }: Props) => {
  const fullNameInputState = useInputState("Abdelhadi Ahmed");
  const emaiInputState = useInputState("abdelhadi.deve@gmail.com");
  const phoneInputState = useInputState("0626777317");

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
