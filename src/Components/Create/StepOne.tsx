import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { Text, Input } from "@ui-kitten/components";

import { UploadedImageType } from "./../../Store/UploadedImages/types";
import { addImage } from "./../../Store/UploadedImages/actions";
import Upload from "./Upload";
import { IconX, ICON_TYPE } from "../../Icons";

interface RootState {
  UploadedImages: Array<UploadedImageType>;
}
const mapStateToProps = (state: RootState, ownProps) => ({
  uploadedImages: state.UploadedImages,
  ownProps: ownProps,
});

const connector = connect(mapStateToProps);
type Props = ReturnType<typeof mapStateToProps> & {
  label: string;
};

const StepOne: React.FC<Props> = ({ uploadedImages }: Props) => {
  return (
    <View>
      <View style={styles.titleView}>
        <Text style={styles.title}>Photos (4 maximum)</Text>
      </View>
      <Upload />
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
