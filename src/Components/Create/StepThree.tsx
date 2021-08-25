import React, { useState, useEffect, Dispatch } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { connect } from "react-redux";
import { UploadedImageType } from "./../../Store/UploadedImages/types";
import Three from "./Three";
import { setDataStepThreeType, dataStepThreeType } from "./Three/types";

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

const StepThree: React.FC<Props> = ({ setDataStepThree, dataStepThree }) => {
  return (
    <View style={styles.wrapperSteps}>
      <Three
        dataStepThree={dataStepThree}
        setDataStepThree={setDataStepThree}
      />
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
