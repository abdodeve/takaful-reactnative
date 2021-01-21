import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { Text, Input } from "@ui-kitten/components";

import { UploadedImageType } from "./../../Store/UploadedImages/types";
import { addImage } from "./../../Store/UploadedImages/actions";
import Two from "./Two";
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
    <View style={{ marginHorizontal: 15 }}>
      <View style={styles.titleView}>
        <Text style={styles.title}>
          Merci de choisir dans la liste ci-dessous la catégorie et le type de
          votre annonce.
        </Text>
      </View>
      <Two />
    </View>
  );
};

const styles = StyleSheet.create({
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
export default connector(StepOne);
