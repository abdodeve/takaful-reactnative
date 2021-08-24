import React, { useState, useEffect, Dispatch } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { Text, Input } from "@ui-kitten/components";

import { UploadedImageType } from "./../../Store/UploadedImages/types";
import Two from "./Two";
import { setDataStepTwoType, dataStepTwoType } from "./Two/types";

const deviceHeight = Dimensions.get("window").height;

interface RootState {
  uploadedImagesStore: Array<UploadedImageType>;
}
const mapStateToProps = (state: RootState, ownProps) => ({
  uploadedImages: state.uploadedImagesStore,
  ownProps: ownProps,
});

const connector = connect(mapStateToProps);
type Props = ReturnType<typeof mapStateToProps> & {
  setDataStepTwo: setDataStepTwoType;
  dataStepTwo: dataStepTwoType;
};

const StepTwo: React.FC<Props> = (props) => {

  useEffect(() => {
    props.setDataStepTwo(props.dataStepTwo);
    return () => {
      //cleanup
    };
  }, [props.dataStepTwo]);

  return (
    <View style={styles.wrapperSteps}>
      <View style={styles.titleView}>
        <Text style={styles.title}>
          Merci de choisir dans la liste ci-dessous la catégorie et le type de
          votre annonce.
        </Text>
      </View>
      <Two setDataStepTwo={props.setDataStepTwo} 
          dataStepTwo={props.dataStepTwo}/>
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
export default connector(StepTwo);
