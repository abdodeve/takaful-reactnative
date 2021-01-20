import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";

import { IconX, ICON_TYPE } from "../../../Icons";
import { addImage, removeImage } from "./../../../Store/UploadedImages/actions";
import { UploadedImageType } from "./../../../Store/UploadedImages/types";

const deviceHeight = Dimensions.get("window").height;
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
    removeImage: (meta: UploadedImageType) => {
      dispatch(removeImage(meta));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    uri: string;
    index: number;
  };

/**
 * If image uploaded
 * @param uri
 */
const ImageBlock: React.FC<Props> = ({ uri, index, removeImage }: Props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.clearImageBtn}
        onPress={() => {
          removeImage({ index });
        }}
      >
        <IconX
          name="md-close-circle"
          color="#fc5c65"
          size={30}
          origin={ICON_TYPE.IONICONS}
        />
      </TouchableOpacity>
      <Image
        style={styles.itemDimensions}
        source={{
          uri: uri,
        }}
      />
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
    height: deviceHeight * 0.21,
    width: 180,
  },
  clearImageBtn: {
    position: "absolute",
    top: 0,
    right: 4,
    zIndex: 1,
  },
});

export default connector(ImageBlock);
