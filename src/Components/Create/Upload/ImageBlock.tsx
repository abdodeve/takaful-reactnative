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

import Actions from "./../../../Actions";
import { IconX, ICON_TYPE } from "../../../Icons";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

type ImageBlockType = {
  index: number;
  uri: string;
  setImages: Function;
};
/**
 * If image uploaded
 * @param uri
 */
const ImageBlock: React.FC<any> = ({
  index,
  uri,
  setImages,
  addImage,
  uploadedImage,
}: any) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.clearImageBtn}
        onPress={() => {
          console.log("123");
          setImages((prevState) => {
            // result["index"] = index;
            prevState["uri"] = null;
            return prevState;
          });
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

export default ImageBlock;
