import React, { useState } from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

import { IconX, ICON_TYPE } from "../../Icons";

const ItemLeft: React.FC = () => {
  return (
    <Layout style={styles.itemLeft}>
      <Image
        style={styles.imgLeft}
        source={require("../../../assets/announcements/1/baby-buggy.jpg")}
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
  );
};

const styles = StyleSheet.create({
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
  imgLeft: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  iconImg: { marginRight: 8 },
});

export default ItemLeft;
