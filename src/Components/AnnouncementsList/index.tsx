import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Layout, Text } from "@ui-kitten/components";

import ANNOUNCEMENTS from "./../../../dummy-data/announcements";
import ItemLeft from "./ItemLeft";
import ItemRight from "./ItemRight";
import { Announcement } from "../../Models";
import { Routes, ScreenProps } from "../../Navigation/Routes";

const deviceHeight = Dimensions.get("window").height;

const Item = ({ item, onPress, route, navigation }) => (
  <Layout style={[styles.item]}>
    <TouchableOpacity onPress={onPress} style={[styles.touchableItem]}>
      <ItemLeft item={item} />
      <ItemRight item={item} route={route} navigation={navigation} />
    </TouchableOpacity>
  </Layout>
);

const AnnouncementsList: React.FC<ScreenProps> = ({
  route,
  navigation,
}: ScreenProps) => {
  const renderItem = ({ item }: { item: Announcement }) => {
    return (
      <Item
        item={item}
        onPress={() => {
          navigation.navigate(Routes.DETAILS_SCREEN);
        }}
        route={route}
        navigation={navigation}
      />
    );
  };

  return (
    <FlatList
      data={ANNOUNCEMENTS}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
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
    elevation: 3,
  },
  touchableItem: {
    flex: 1,
    flexDirection: "row",
    height: deviceHeight * 0.18,
  },
});

export default AnnouncementsList;
