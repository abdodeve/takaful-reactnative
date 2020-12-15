import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Layout } from "@ui-kitten/components";

import ItemLeft from "./ItemLeft";
import ItemRight from "./ItemRight";

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
      <ItemLeft />
      <ItemRight item={item} />
    </TouchableOpacity>
  </Layout>
);

const AnnouncementsList: React.FC = () => {
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
    borderRadius: 15,
    overflow: "hidden",
  },
  touchableItem: {
    flex: 1,
    flexDirection: "row",
    height: deviceHeight * 0.18,
  },
});

export default AnnouncementsList;
