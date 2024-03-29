import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { Text, Input } from "@ui-kitten/components";

import { UploadedImageType } from "./../../Store/UploadedImages/types";
import { addImage } from "./../../Store/UploadedImages/actions";
import Four from "./Four";
import { IconX, ICON_TYPE } from "../../Icons";
import { setDataStepFourType, dataStepFourType } from "./Four/types";

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
  setDataStepFour: setDataStepFourType;
  dataStepFour: dataStepFourType;
};

const StepFour: React.FC<Props> = ({ setDataStepFour, dataStepFour }) => {
  return (
    <View style={styles.wrapperSteps}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Vos informations</Text>
      </View>
      <Four setDataStepFour={setDataStepFour} dataStepFour={dataStepFour} />
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
    fontSize: 20,
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
export default connector(StepFour);
