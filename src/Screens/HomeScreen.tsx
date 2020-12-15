import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import {
  ApplicationProvider,
  Layout,
  Button,
  Text,
  useTheme,
} from "@ui-kitten/components";

import { Routes, ScreenProps } from "../Navigation/Routes";
import { IconX, ICON_TYPE } from "../Icons";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item pousette baby double twin",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "7",
    title: "Third Item 7",
  },
  {
    id: "6",
    title: "Third Item 6",
  },
  {
    id: "5",
    title: "Third Item 5",
  },
  {
    id: "4",
    title: "Third Item 4",
  },
  {
    id: "3",
    title: "Third Item 3",
  },
  {
    id: "2",
    title: "Third Item 2",
  },
];

const Item = ({ item, onPress }) => (
  <Layout style={[styles.item]}>
    <TouchableOpacity onPress={onPress} style={[styles.touchableItem]}>
      <Layout style={styles.itemLeft}>
        <Image
          style={styles.imgLeft}
          source={require("../../assets/announcements/1/baby-buggy.jpg")}
        />
        <View style={styles.imgNumberView}>
          <IconX
            name="camera"
            color="#fff"
            size={20}
            origin={ICON_TYPE.FONT_AWESOME}
            style={styles.iconImg}
          />
          <Text style={styles.imgNumberTxt}>6</Text>
        </View>
      </Layout>
      <Layout style={[styles.itemRight]}>
        <View style={styles.viewTitle}>
          <Text style={[styles.title]}>{item.title}</Text>
        </View>
        <View style={styles.bottomItem}>
          <View style={styles.locationBlock}>
            <IconX
              name="md-pin"
              color="#7f8c8d"
              size={18}
              origin={ICON_TYPE.IONICONS}
              style={{ marginRight: 4 }}
            />
            <Text style={styles.textLocation}>Casablanca</Text>
          </View>
          <View style={styles.locationBlock}>
            <IconX
              name="clockcircle"
              color="#7f8c8d"
              size={14}
              origin={ICON_TYPE.ANT_ICON}
              style={{ marginRight: 4 }}
            />
            <Text style={styles.textLocation}>12 déc, 09:45</Text>
          </View>
        </View>
      </Layout>
    </TouchableOpacity>
  </Layout>
);

const HomeScreen: React.FC<ScreenProps> = ({
  route,
  navigation,
}: ScreenProps) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginVertical: 6,
    marginHorizontal: 16,
    flex: 1,
    flexDirection: "row",
  },
  title: {
    fontSize: 21,
    textAlign: "center",
  },
  touchableItem: {
    flex: 1,
    flexDirection: "row",
    height: deviceHeight * 0.18,
    borderRadius: 15,
    overflow: "hidden",
  },
  imgNumberView: {
    position: "absolute",
    right: 0,
    bottom: 0,
    padding: 4,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(127, 140, 141,0.4)",
  },
  imgNumberTxt: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  itemLeft: {
    width: "40%",
  },
  itemRight: {
    width: "60%",
  },
  imgLeft: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  iconImg: { marginRight: 8 },
  viewTitle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  bottomItem: {
    flexDirection: "row",
    marginBottom: 5,
    marginLeft: 6,
    position: "absolute",
    bottom: 0,
  },
  locationBlock: {
    flexDirection: "row",
    marginRight: 8,
    alignItems: "center",
  },
  textLocation: { fontSize: 11, color: "#7f8c8d" },
});

export default HomeScreen;
