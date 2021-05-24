import React, { useState, useEffect, useRef } from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import ImageViewer from "react-native-image-zoom-viewer";
import { SafeAreaView } from "react-native-safe-area-context";

import { ScreenProps, Routes } from "../Navigation/Routes";
import GoBack from "./../Components/Shared/GoBack";

const SliderFullScreen: React.FC<ScreenProps> = ({
  route,
  navigation,
}: ScreenProps) => {
  type imagesType = {
    url: string;
  };

  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState("100%");

  const images: imagesType[] = [
    {
      url: "https://images3.alphacoders.com/246/thumb-1920-246147.jpg",
    },
    {
      url:
        "https://res.cloudinary.com/dgodjz1pn/image/upload/c_scale,dpr_auto,f_auto,q_auto,w_auto:120:1200/v1/products/sofa-bed-duo/slider/slide-1",
    },
    {
      url:
        "https://www.primeclassicdesign.com/images/daybeds-lounge-chaise-leather/modern-chaise-lounge-in-leather-chcorv.jpg",
    },
    {
      url:
        "https://www.shop-ici-ailleurs.com/wp-content/uploads/2019/05/Machine-%C3%A0-caf%C3%A9-Philips-35-photos-mod%C3%A8les-Saeco-et-Xsmall-678x381.jpg",
    },
  ];

  const [imagesFormatted, setImagesFormatted] = useState<{ url: string }[]>([]);

  useEffect(() => {
    ScreenOrientation.unlockAsync();
    function formattingImage() {
      const getImages = (route.params as any)?.images as string[];
      const formatImgs = getImages.map((value) => {
        return { url: value };
      });
      setImagesFormatted(formatImgs);
    }
    formattingImage();
    return () => {};
  }, []);

  ScreenOrientation.addOrientationChangeListener((event) => {
    setWidth(Dimensions.get("window").width);
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, { width, height }]}>
        <GoBack route={route} navigation={navigation} />
        {/* <Text>{JSON.stringify(imagesFormatted)}</Text> */}
        {imagesFormatted.length > 0 && (
          <ImageViewer
            imageUrls={imagesFormatted}
            // imageUrls={images}
            saveToLocalByLongPress={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: -15,
    alignSelf: "center",
  },
  dot: {
    color: "#888",
    fontSize: 50,
  },
  activeDot: {
    color: "#FFF",
    fontSize: 50,
  },
});

export default SliderFullScreen;
