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

import Item from "./Item";
import Actions from "./../../../Actions";
import { IconX, ICON_TYPE } from "../../../Icons";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
let defaultImages: any = [
  { index: 0 },
  {
    index: 1,
    // uri:
    //   "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
  },
  { index: 2 },
  { index: 3 },
];

/**
 * ImagesUploaded
 *
 */
const ImagesUploaded: React.FC = () => {
  const [images, setImages] = useState<any[]>(defaultImages);

  return (
    <View style={[styles.container]}>
      <Button title="Test images" onPress={() => {}} />
      {/* {DATA.map((value, index) => { */}
      {defaultImages.map((value, index) => {
        return (
          <Item
            key={value.index}
            uri={value.uri}
            index={index}
            images={images}
            setImages={setImages}
          />
        );
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

export default ImagesUploaded;
