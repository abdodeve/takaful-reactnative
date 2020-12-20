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

import { IconX, ICON_TYPE } from "../Icons";
import { ScreenProps } from "../Navigation/Routes";

export const PhoneIcon = () => (
  <IconX name="phone" color="#fff" origin={ICON_TYPE.FEATHER_ICONS} />
);

const DetailsScreen: React.FC<ScreenProps> = ({
  route,
  navigation,
}: ScreenProps) => {
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

  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
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
                <Text
                  key={k}
                  style={k == active ? styles.activeDot : styles.dot}
                >
                  •
                </Text>
              ))}
            </View>
          </View>
          <View
            style={{
              marginVertical: 15,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
              category="h5"
            >
              Pousette double en bon état
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 5,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginRight: 8,
                alignItems: "center",
              }}
            >
              <IconX
                name="md-pin"
                color="#7f8c8d"
                size={18}
                origin={ICON_TYPE.IONICONS}
                style={{ marginRight: 4 }}
              />
              <Text style={{ fontSize: 11, color: "#7f8c8d" }}>Casablanca</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginRight: 8,
                alignItems: "center",
              }}
            >
              <IconX
                name="clockcircle"
                color="#7f8c8d"
                size={14}
                origin={ICON_TYPE.ANT_ICON}
                style={{ marginRight: 4 }}
              />
              <Text style={{ fontSize: 11, color: "#7f8c8d" }}>
                12 déc, 09:45
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 5,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginRight: 8,
                alignItems: "center",
              }}
            >
              <IconX
                name="md-pin"
                color="#7f8c8d"
                size={18}
                origin={ICON_TYPE.IONICONS}
                style={{ marginRight: 4 }}
              />
              <Text style={{ fontSize: 11, color: "#7f8c8d" }}>Don</Text>
            </View>
            <View
              style={{
                borderRightWidth: 2,
                borderRightColor: "#7f8c8d",
                height: 15,
                marginHorizontal: 20,
                top: 2,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                marginRight: 8,
                alignItems: "center",
              }}
            >
              <IconX
                name="clockcircle"
                color="#7f8c8d"
                size={14}
                origin={ICON_TYPE.ANT_ICON}
                style={{ marginRight: 4 }}
              />
              <Text style={{ fontSize: 11, color: "#7f8c8d" }}>32 min</Text>
            </View>
            <View
              style={{
                borderRightWidth: 2,
                borderRightColor: "#7f8c8d",
                height: 15,
                marginHorizontal: 20,
                top: 2,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                marginRight: 8,
                alignItems: "center",
              }}
            >
              <IconX
                name="clockcircle"
                color="#7f8c8d"
                size={14}
                origin={ICON_TYPE.ANT_ICON}
                style={{ marginRight: 4 }}
              />
              <Text style={{ fontSize: 11, color: "#7f8c8d" }}>À bricoler</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "#7f8c8d",
              width: "100%",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ marginLeft: 20 }}>Type</Text>
            </View>
            <View>
              <Text style={{ marginRight: 20 }}>Electromenager</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "#7f8c8d",
              width: "100%",
            }}
          />
          <View style={{ marginHorizontal: 15 }}>
            <Text category="h6" style={{ fontWeight: "bold" }}>
              Description
            </Text>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "grey",
        }}
      >
        <View>
          <Text style={{ marginLeft: 20 }}>Amine</Text>
        </View>
        <View>
          <View style={{ marginRight: 20 }}>
            <Button
              onPress={() => {
                Linking.openURL(`tel:0766755933`);
              }}
              status="danger"
              accessoryLeft={PhoneIcon}
            />
          </View>
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

export default DetailsScreen;
