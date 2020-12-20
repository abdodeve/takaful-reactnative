import React, { useState } from "react";
import { View, Linking, StyleSheet } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";

import { IconX, ICON_TYPE } from "../../Icons";

export const PhoneIcon = () => (
  <IconX name="phone" color="#fff" origin={ICON_TYPE.FEATHER_ICONS} />
);

const FooterContact: React.FC = () => {
  return (
    <View style={styles.footerWrapper}>
      <View>
        <Text style={styles.nameText}>Amine</Text>
      </View>
      <View>
        <View style={styles.rightBlock}>
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
  );
};

const styles = StyleSheet.create({
  footerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "grey",
  },
  nameText: { marginLeft: 20 },
  rightBlock: { marginRight: 20 },
});

export default FooterContact;
