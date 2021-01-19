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
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Layout, Text, useTheme } from "@ui-kitten/components";
import { connect } from "react-redux";

import { UploadedImageType } from "./../../../Store/UploadedImages/types";
import { addImage } from "./../../../Store/UploadedImages/actions";
import Item from "./Item";
import { IconX, ICON_TYPE } from "../../../Icons";
import UPLOADED_IMAGES from "../../../../dummy-data/UPLOADED_IMAGES";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

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

/**
 * ImagesUploaded
 *
 */
const ImagesUploaded: React.FC<Props> = ({
  addImage,
  uploadedImages,
}: Props) => {
  const [images, setImages] = useState<any[]>(UPLOADED_IMAGES);

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
    flex: 1,
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

// export default connect(mapStateToProps, mapDispatchToProps)(ImagesUploaded);
export default connector(ImagesUploaded);
