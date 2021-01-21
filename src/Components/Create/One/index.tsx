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
import Item from "./Item";

const deviceHeight = Dimensions.get("window").height;

interface RootState {
  UploadedImages: Array<UploadedImageType>;
}
const mapStateToProps = (state: RootState, ownProps) => ({
  uploadedImages: state.UploadedImages,
  ownProps: ownProps,
});

const connector = connect(mapStateToProps);
type Props = ReturnType<typeof mapStateToProps>;

/**
 * ImagesUploaded
 *
 */
const ImagesUploaded: React.FC<Props> = ({ uploadedImages }: Props) => {
  return (
    <View style={[styles.container]}>
      {uploadedImages.map((value, index) => {
        return <Item key={value.index} uri={value.uri} index={index} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  touchableItem: {
    elevation: 4,
    backgroundColor: "#ecf0f1",
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: 15,
    marginVertical: 6,
    marginHorizontal: 16,
  },
  itemDimensions: {
    height: deviceHeight * 0.18,
    width: 150,
  },
  clearImageBtn: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
  },
});

export default connector(ImagesUploaded);
