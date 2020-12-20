import React, { useState } from "react";
import {
  View,
  Image,
  ScrollView,
  useWindowDimensions,
  Linking,
  StyleSheet,
} from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";

import { IconX, ICON_TYPE } from "../../Icons";

export const PhoneIcon = () => (
  <IconX name="phone" color="#fff" origin={ICON_TYPE.FEATHER_ICONS} />
);

const SliderImages: React.FC = () => {
  const width = useWindowDimensions().width;
  const height = width * 0.6;

  const [active, setActive] = useState(0);

  const images = [
    "https://i.pinimg.com/236x/09/66/4f/09664f3441de659f26bf604a2f1f8f43.jpg",
    "https://i.pinimg.com/236x/1f/9a/44/1f9a4405c1db5d23a13d8608dfba6850.jpg",
    "https://i.pinimg.com/236x/28/b9/43/28b94382c8bea2d56afbabe1369d3b68.jpg",
    "https://i.pinimg.com/564x/9c/40/ac/9c40acb5931b72b8ace4cb446ee0d068.jpg",
    "https://i.pinimg.com/236x/0d/a7/3b/0da73b6592ba04b63385c12280d1bf6a.jpg",
  ];

  /**
   * OnSlide Image
   * @param param0 nativeEvent
   */
  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  return (
    <View>
      <View>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={change}
          style={{ width, height }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={{ width, height, resizeMode: "cover" }}
            />
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {images.map((i, k) => (
            <Text key={k} style={k == active ? styles.activeDot : styles.dot}>
              •
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default SliderImages;
