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

import { UploadedImageType } from "../../../Store/UploadedImages/types";
import InputCity from "./InputCity";

const deviceHeight = Dimensions.get("window").height;

interface RootState {
  uploadedImagesStore: Array<UploadedImageType>;
}
const mapStateToProps = (state: RootState, ownProps) => ({
  uploadedImages: state.uploadedImagesStore,
  ownProps: ownProps,
});

const connector = connect(mapStateToProps);
type Props = ReturnType<typeof mapStateToProps>;

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

/**
 * Three
 *
 */
const Three: React.FC<Props> = ({ uploadedImages }: Props) => {
  const primaryInputState = useInputState();
  const multilineInputState = useInputState();

  const theme = useTheme();

  return (
    <View style={[styles.container]}>
      <View style={styles.cityInput}>
        <Text style={styles.title}>
          Ville<Text style={styles.requiredSign}>*</Text>
        </Text>
        <InputCity />
      </View>
      <View style={styles.inputsView}>
        <Text style={styles.title}>
          Titre de l'annonce<Text style={styles.requiredSign}>*</Text>
        </Text>
        <Input
          maxLength={30}
          status="basic"
          placeholder="Entrez le titre de l'annonce"
          {...primaryInputState}
        />
      </View>
      <View style={styles.inputsView}>
        <Text style={styles.title}>
          Déscription de l'annonce<Text style={styles.requiredSign}>*</Text>
        </Text>
        <Input
          multiline={true}
          textStyle={styles.inputDescription}
          numberOfLines={6}
          placeholder="Entrez la déscription de l'annonce"
          {...multilineInputState}
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

export default connector(Three);
