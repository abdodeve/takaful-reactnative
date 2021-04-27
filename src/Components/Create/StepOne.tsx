import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { Text, Input } from "@ui-kitten/components";

import { UploadedImageType } from "./../../Store/UploadedImages/types";
import { addImage } from "./../../Store/UploadedImages/actions";
import One from "./One";
import { IconX, ICON_TYPE } from "../../Icons";

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
  label: string;
};

const StepOne: React.FC<Props> = () => {
  return (
    <View style={styles.wrapperSteps}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Photos (4 maximum)</Text>
      </View>
      <One />
      <View style={styles.textMessageView}>
        <IconX
          name="exclamation-triangle"
          color="#f1c40f"
          size={17}
          origin={ICON_TYPE.FONT_AWESOME5}
          style={{ marginRight: 6 }}
        />
        <Text style={styles.textMessage}>Une photo vaut mille mots</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperSteps: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // height: deviceHeight * 0.6,
    // marginHorizontal: 15,
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
export default connector(StepOne);
