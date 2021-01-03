import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Layout } from "@ui-kitten/components";

import ANNOUNCEMENTS from "./../../../dummy-data/announcements";
import ItemLeft from "./ItemLeft";
import ItemRight from "./ItemRight";
import { Announcement } from "../../Models";
import { Routes, ScreenProps } from "../../Navigation/Routes";

const deviceHeight = Dimensions.get("window").height;

const Item = ({ item, onPress }) => (
  <Layout style={[styles.item]}>
    <TouchableOpacity onPress={onPress} style={[styles.touchableItem]}>
      <ItemLeft item={item} />
      <ItemRight item={item} />
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
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ANNOUNCEMENTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
