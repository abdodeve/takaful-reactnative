import React, { useState, useEffect } from "react";
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

import { IconX, ICON_TYPE } from "../../Icons";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    imageSrc: null,
    // imageSrc:
    //   "https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    // imageSrc: null,
    imageSrc:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    imageSrc: null,
    // imageSrc:
    //   "https://images.france.fr/zeaejvyq9bhj/4VGVbWT4kwsIyqaIuyiYs2/69b40a00fddb2b2c26ebd472fa6e4186/nature_dordogne.jpg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-dfdjd997",
    imageSrc: null, // "https://www.novethic.fr/fileadmin//biodiversite-nature-finance-iStock-sarayut.jpg",
  },
];

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

type ImageBlockType = {
  imageSrc: string;
};
const ImageBlock: React.FC<ImageBlockType> = ({ imageSrc }: ImageBlockType) => {
  return (
    <View>
      <TouchableOpacity style={styles.clearImageBtn}>
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
          uri: imageSrc,
        }}
      />
    </View>
  );
};

type ItemType = {
  imageSrc: string | null;
  index: number;
};
const Item: React.FC<ItemType> = ({ imageSrc, index }: ItemType) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.touchableItem,
        styles.itemDimensions,
        styleFirstItem(index, theme)?.container,
      ]}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {imageSrc ? (
          // If image uploaded
          <ImageBlock imageSrc={imageSrc} />
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

const ImagesUploaded: React.FC = () => {
  return (
    <View style={[styles.container]}>
      {DATA.map((value, index) => {
        return <Item key={value.id} imageSrc={value.imageSrc} index={index} />;
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
