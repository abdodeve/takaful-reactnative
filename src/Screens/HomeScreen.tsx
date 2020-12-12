import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";

import { Routes, ScreenProps } from "../Navigation/Routes";
import { IconX, ICON_TYPE } from "../Icons";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
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
  <View style={[styles.item]}>
    <TouchableOpacity onPress={onPress} style={[styles.touchableItem]}>
      <View style={styles.itemLeft}>
        <Image
          style={styles.imgLeft}
          source={require("../../assets/announcements/1/baby-buggy.jpg")}
        />
        <View style={styles.imgNumberView}>
          <Text style={styles.imgNumberTxt}>Centered text</Text>
        </View>
      </View>
      <View style={styles.itemRight}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  </View>
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
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    flexDirection: "row",
  },
  title: {
    fontSize: 32,
  },
  touchableItem: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#6e3b6e",
    height: deviceHeight * 0.18,
  },
  imgNumberView: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  imgNumberTxt: {
    fontSize: 15,
    color: "#fff",
  },
  itemLeft: {
    backgroundColor: "red",
    width: "40%",
  },
  itemRight: {
    width: "60%",
    backgroundColor: "skyblue",
  },
  imgLeft: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
});

export default HomeScreen;
