import React, { useState, useEffect } from "react";
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
import * as ImagePicker from "expo-image-picker";
import { Layout, Text } from "@ui-kitten/components";
import { connect } from "react-redux";

import Actions from "../../Store/Actions";
import Upload from "./Upload";

const StepOne: React.FC<any> = ({ addImage, uploadedImage }) => {
  const [image, setImage] = useState<ImagePicker.ImagePickerResult | null>(
    null
  );

  return (
    <View>
      <Text>{JSON.stringify(uploadedImage)}</Text>
      {/* <Upload /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state, ownProps) => ({
  uploadedImage: state,
  ownProps: ownProps,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addImage: (uploadedImage) => {
      dispatch(Actions.UploadedImages.addImage(uploadedImage));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
