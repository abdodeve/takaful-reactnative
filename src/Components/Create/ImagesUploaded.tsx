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

import { IconX, ICON_TYPE } from "../../Icons";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    uri: null,
    // uri:
    //   "https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    // uri: null,
    uri: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    uri: null,
    // uri:
    //   "https://images.france.fr/zeaejvyq9bhj/4VGVbWT4kwsIyqaIuyiYs2/69b40a00fddb2b2c26ebd472fa6e4186/nature_dordogne.jpg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-dfdjd997",
    uri: null, // "https://www.novethic.fr/fileadmin//biodiversite-nature-finance-iStock-sarayut.jpg",
  },
];

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
const ThemeContext = React.createContext([defaultImages, null]);

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
  index: number;
  uri: string;
  setImages: Function;
};
/**
 * If image uploaded
 * @param uri
 */
const ImageBlock: React.FC<ImageBlockType> = ({
  index,
  uri,
  setImages,
}: ImageBlockType) => {
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
const Item: React.FC<ItemType> = ({
  uri,
  index,
  images,
  setImages,
}: ItemType) => {
  const theme = useTheme();
  const setContext: any = React.useContext(ThemeContext)[1];

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
      // changeImage(result);
      setContext((prevState) => {
        // result["index"] = index;
        console.log("prevState==>", prevState);
        prevState[index] = { index, uri: result["uri"] };
        return prevState;
      });
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

/**
 * ImagesUploaded
 *
 */
const ImagesUploaded: React.FC = () => {
  const [images, setImages] = useState<any[]>(defaultImages);
  const ref = useRef(defaultImages);
  const theme: any = React.useContext(ThemeContext)[0];

  return (
    <ThemeContext.Provider value={[theme, setImages]}>
      <View style={[styles.container]}>
        <Button
          title="Test images"
          onPress={() => {
            console.log("theme===>", theme);
          }}
        />
        {/* {DATA.map((value, index) => { */}
        {theme.map((value, index) => {
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
    </ThemeContext.Provider>
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
