import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { Text, Input } from "@ui-kitten/components";

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
      <View style={styles.titleView}>
        <Text style={styles.title}>Photos (4 maximum)</Text>
      </View>
      <Upload />
    </View>
  );
};

const styles = StyleSheet.create({
  titleView: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default connector(StepOne);
