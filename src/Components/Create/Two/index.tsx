import React, { useState, useEffect, useCallback, useRef } from "react";
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
  Text,
} from "react-native";
import { connect } from "react-redux";

import { UploadedImageType } from "../../../Store/UploadedImages/types";
import SelectCategory from "./SelectCategory";
import RadioAnnouncementType from "./RadioAnnouncementType";

const deviceHeight = Dimensions.get("window").height;

interface RootState {
  uploadedImagesStore: Array<UploadedImageType>;
}
const mapStateToProps = (state: RootState, ownProps) => ({
  uploadedImages: state.uploadedImagesStore,
  ownProps: ownProps,
});

const connector = connect(mapStateToProps);
type Props = ReturnType<typeof mapStateToProps>;

/**
 * Two
 *
 */
const Two: React.FC<Props> = ({ uploadedImages }: Props) => {
  return (
    <View style={[styles.container]}>
      <SelectCategory />
      <View style={styles.typeTitle}>
        <Text style={styles.title}>Type d'annonce</Text>
        <RadioAnnouncementType />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  typeTitle: { marginTop: 30 },
});

export default connector(Two);
