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

import ImageBlock from "./ImageBlock";
import { IconX, ICON_TYPE } from "../../../Icons";
import { addImage } from "./../../../Store/UploadedImages/actions";
import { UploadedImageType } from "./../../../Store/UploadedImages/types";

const deviceHeight = Dimensions.get("window").height;

/**
 * Styling the first item of images
 * @param index the index of element
 * @param theme theme object
 */
const styleFirstItem = (index, theme) => {
  if (index !== 0) return null;

  return {
    container: { backgroundColor: "#fff" },
    iconColor: theme["color-warning-300"],
  };
};
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
    uri: string;
    index: number;
  };

/**
 * Item of image
 * @param uri
 * @param index
 * @param addImage
 */
const Item: React.FC<Props> = ({ uri, index, addImage }: Props) => {
  const theme = useTheme();

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    })();
  }, []);

  const [, updateState] = useState({});

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      result["index"] = index;
      const newImage = { index, uri: result["uri"] };
      addImage(newImage);
    }
  };
  return (
    <TouchableOpacity
      style={[
        styles.touchableItem,
        styles.itemDimensions,
        styleFirstItem(index, theme)?.container,
      ]}
      onPress={pickImage}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {uri ? (
          // If image uploaded
          <ImageBlock index={index} uri={uri} />
        ) : (
          //  If NO image uploaded
          <IconX
            name="camera"
            color={styleFirstItem(index, theme)?.iconColor}
            size={60}
            origin={ICON_TYPE.FONT_AWESOME}
          />
        )}
      </View>
    </TouchableOpacity>
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
    marginHorizontal: 6,
  },
  itemDimensions: {
    height: deviceHeight * 0.21,
    width: 180,
  },
  clearImageBtn: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
  },
});

export default connector(Item);
