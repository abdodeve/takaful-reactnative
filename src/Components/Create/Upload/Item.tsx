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

import Actions from "./../../../Actions";
import ImageBlock from "./ImageBlock";
import { IconX, ICON_TYPE } from "../../../Icons";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

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

type ItemType = {
  uri: string | null | undefined;
  index: number;
  images: any;
  setImages: any;
};
/**
 * Item of image
 * @param uri
 * @param index
 */
const Item: React.FC<any> = ({
  uri,
  index,
  images,
  setImages,
  addImage,
  uploadedImage,
}: any) => {
  const theme = useTheme();

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    })();
  }, []);

  const changeImage = useCallback(
    (result) => {
      setImages((prevState) => {
        prevState[index] = { index, uri: result["uri"] };
        return prevState;
      });
    },
    [images]
  );

  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  const pickImage = async () => {
    // setImages([]);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      result["index"] = index;
      const newImage = { index, uri: result["uri"] };
      addImage(newImage);
      // setImages((prevState) => {
      //   // result["index"] = index;
      //   prevState[index] = { index, uri: result["uri"] };
      //   return prevState;
      // });
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
        {console.log("uri===>", uri)}
        {uri ? (
          // If image uploaded
          <ImageBlock index={index} uri={uri} setImages={setImages} />
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

const mapStateToProps = (state, ownProps) => ({
  uploadedImage: state,
  ownProps: ownProps,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addImage: (uploadedImage) => {
      dispatch(Actions.UploadedImages.addImage(uploadedImage));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
