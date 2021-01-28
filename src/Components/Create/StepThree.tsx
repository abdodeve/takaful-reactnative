import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { connect } from "react-redux";
import { UploadedImageType } from "./../../Store/UploadedImages/types";
import Three from "./Three";

const deviceHeight = Dimensions.get("window").height;

interface RootState {
  UploadedImagesStore: Array<UploadedImageType>;
}
const mapStateToProps = (state: RootState, ownProps) => ({
  uploadedImages: state.UploadedImagesStore,
  ownProps: ownProps,
});

const connector = connect(mapStateToProps);
type Props = ReturnType<typeof mapStateToProps> & {
  label: string;
};

const StepThree: React.FC<Props> = () => {
  return (
    <View style={styles.wrapperSteps}>
      <Three />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperSteps: {
    flex: 1,
    justifyContent: "center",
    height: deviceHeight * 0.6,
    marginHorizontal: 15,
  },
  titleView: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textMessageView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },
  textMessage: { fontSize: 17 },
});
export default connector(StepThree);
