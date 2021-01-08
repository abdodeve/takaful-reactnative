import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Layout, Text } from "@ui-kitten/components";

import { IconX, ICON_TYPE } from "../../Icons";
import { Announcement } from "../../Models";

type Props = {
  item: Announcement;
};

const ItemRight: React.FC<Props> = (props: Props) => {
  return (
    <Layout style={[styles.itemRight]}>
      <View style={styles.moreBtnView}>
        <TouchableOpacity
          style={styles.moreBtn}
          onPress={() => {
            console.log("more btn");
          }}
        >
          <IconX
            name="dots-vertical"
            color="#000"
            size={18}
            origin={ICON_TYPE.MATERIAL_COMMUNITY}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.viewTitle]}>
        <Text style={[styles.title]}>{props.item.title}</Text>
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
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 21,
    textAlign: "center",
  },
  itemRight: {
    width: "60%",
    flex: 1,
    flexDirection: "column",
  },
  moreBtnView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
    right: 0,
    top: 3,
    zIndex: 1,
  },
  moreBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 32,
  },
  viewTitle: {
    height: "85%",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 1,
  },
  bottomItem: {
    flexDirection: "row",
    marginBottom: 1,
    marginLeft: 6,
    position: "absolute",
    bottom: 0,
    height: "15%",
  },
  locationBlock: {
    flexDirection: "row",
    marginRight: 8,
    alignItems: "center",
  },
  textLocation: { fontSize: 11, color: "#7f8c8d" },
});

export default ItemRight;
