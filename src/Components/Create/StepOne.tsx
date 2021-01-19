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
import { connect, ConnectedProps } from "react-redux";

import * as ImagePicker from "expo-image-picker";
import { Layout, Text } from "@ui-kitten/components";

import { UploadedImageType } from "./../../Store/UploadedImages/types";
import { addImage } from "./../../Store/UploadedImages/actions";
import Upload from "./Upload";

interface RootState {
  UploadedImages: Array<UploadedImageType>;
}
const mapStateToProps = (state: RootState, ownProps) => ({
  uploadedImages: state.UploadedImages,
  ownProps: ownProps,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addImage: (uploadedImage: UploadedImageType) => {
      dispatch(addImage(uploadedImage));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    label: string;
  };

const StepOne: React.FC<Props> = ({ addImage, uploadedImages }: Props) => {
  return (
    <View>
      <Text>{JSON.stringify(uploadedImages)}</Text>
      <Button
        title="addImage"
        onPress={() => {
          console.log(12);
          addImage({ index: 0, uri: "Hello" });
        }}
      />
      {/* <Upload /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default connector(StepOne);

// export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
