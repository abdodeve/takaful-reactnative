import React, { useState, useEffect, useCallback, Dispatch } from "react";
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
import { setDataStepThreeType, dataStepThreeType } from "./types";

const deviceHeight = Dimensions.get("window").height;

interface RootState {
  uploadedImagesStore: Array<UploadedImageType>;
}
const mapStateToProps = (state: RootState, ownProps) => ({
  uploadedImages: state.uploadedImagesStore,
  ownProps: ownProps,
});

const connector = connect(mapStateToProps);
type Props = {
  setDataStepThree: setDataStepThreeType;
  dataStepThree: dataStepThreeType;
};

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

/**
 * Three
 *
 */
const Three: React.FC<Props> = ({ setDataStepThree, dataStepThree }) => {
  const [city, setCity] = useState<string>(dataStepThree.city);
  const [titleAnnouncement, setTitleAnnouncement] = React.useState(
    dataStepThree.titleAnnouncement
  );
  const [description, setDescription] = useState<string>(
    dataStepThree.description
  );

  useEffect(() => {
    setDataStepThree({ city, titleAnnouncement, description });
    return () => {
      // cleanup
    };
  }, [city, titleAnnouncement, description]);

  const theme = useTheme();

  return (
    <View style={[styles.container]}>
      <View style={styles.cityInput}>
        <Text style={styles.title}>
          Ville<Text style={styles.requiredSign}>*</Text>
        </Text>
        <InputCity city={city} setCity={setCity} />
      </View>
      <View style={styles.inputsView}>
        <Text style={styles.title}>
          Titre de l'annonce<Text style={styles.requiredSign}>*</Text>
        </Text>
        <Input
          maxLength={30}
          status="basic"
          placeholder="Entrez le titre de l'annonce"
          value={titleAnnouncement}
          onChangeText={(nextValue) => {
            setTitleAnnouncement(nextValue);
          }}
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
          value={description}
          onChangeText={(nextValue) => {
            setDescription(nextValue);
          }}
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
