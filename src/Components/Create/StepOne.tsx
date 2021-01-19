import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect, ConnectedProps } from "react-redux";

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
      <Upload />
    </View>
  );
};

const styles = StyleSheet.create({});
export default connector(StepOne);
