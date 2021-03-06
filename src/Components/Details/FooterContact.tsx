import React, { useState } from "react";
import { View, Linking, StyleSheet, Dimensions } from "react-native";
import { Text, Button } from "@ui-kitten/components";

import { IconX, ICON_TYPE } from "../../Icons";
import { Colors } from "./../../Constants";
import { Announcement } from "./../../Models";

export const PhoneIcon = () => (
  <IconX name="phone" color="#fff" origin={ICON_TYPE.FEATHER_ICONS} />
);
const windowHeight = Dimensions.get("window").height;

type Props = { announcement?: Announcement };
const FooterContact: React.FC<Props> = ({ announcement }: Props) => {
  return (
    <View style={styles.footerWrapper}>
      <View>
        <Text category="h6" style={styles.nameText}>
          {announcement?.user?.fullName}
        </Text>
      </View>
      <View>
        <View style={styles.rightBlock}>
          <Button
            onPress={() => {
              Linking.openURL(`tel:${announcement?.user?.phone}`);
            }}
            activeOpacity={0.2}
            status="info"
            style={styles.btnCall}
            size="small"
            accessoryLeft={PhoneIcon}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerWrapper: {
    height: windowHeight * 0.06,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.tintColor,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  nameText: {
    fontWeight: "bold",
  },
  rightBlock: {
    alignItems: "center",
    justifyContent: "center",
  },
  btnCall: {
    width: 60,
    height: 37,
  },
});

export default FooterContact;
