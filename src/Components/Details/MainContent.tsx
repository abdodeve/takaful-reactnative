import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  ScrollView,
  useWindowDimensions,
  Linking,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Layout, Text, Button, useTheme } from "@ui-kitten/components";

import { IconX, ICON_TYPE } from "../../Icons";
import { ScreenProps } from "../../Navigation/Routes";
import { Announcement } from "../../Models/Announcement";

export const PhoneIcon = () => (
  <IconX name="phone" color="#fff" origin={ICON_TYPE.FEATHER_ICONS} />
);
type Props = { announcement?: Announcement };

const MainContent: React.FC<Props> = ({ announcement }: Props) => {
  useEffect(() => {
    return () => {
      // unsubscribe;
    };
  }, []);

  const theme = useTheme();
  const specsColor = "#747d8c";

  return (
    <View>
      <View style={styles.titleView}>
        <Text style={styles.titleText} category="h5">
          {announcement?.title}
        </Text>
      </View>
      <View style={styles.blockSpecs}>
        <View style={[styles.firstSpecs, styles.specViewLeft]}>
          <IconX
            name="md-pin"
            color={specsColor}
            size={18}
            origin={ICON_TYPE.IONICONS}
            style={{ marginRight: 4 }}
          />
          <Text style={[styles.specText, { color: specsColor }]}>
            {announcement?.city}
          </Text>
        </View>
        <View style={styles.firstSpecs}>
          <IconX
            name="clockcircle"
            color={specsColor}
            size={14}
            origin={ICON_TYPE.ANT_ICON}
            style={styles.IconSecondBlock}
          />
          <Text style={[styles.specText, { color: specsColor }]}>
            {announcement?.created_at_formatted}
          </Text>
        </View>
      </View>
      <View style={styles.blockSpecs}>
        <View style={styles.secondSpecs}>
          <IconX
            name="gift"
            color={specsColor}
            size={18}
            origin={ICON_TYPE.FONT_AWESOME5}
            style={styles.IconSecondBlock}
          />
          <Text style={[styles.specText, { color: specsColor }]}>
            {announcement?.type_formatted}
          </Text>
        </View>
        <View style={styles.verticalSeparator} />
        <View style={styles.secondSpecs}>
          <IconX
            name="timer-sand-full"
            color={specsColor}
            size={16}
            origin={ICON_TYPE.MATERIAL_COMMUNITY}
            style={styles.IconSecondBlock}
          />
          <Text style={[styles.specText, { color: specsColor }]}>
            {announcement?.timeSince}
          </Text>
        </View>
        <View style={styles.verticalSeparator} />
        <View style={styles.secondSpecs}>
          <IconX
            name="md-checkmark-circle"
            color={specsColor}
            size={18}
            origin={ICON_TYPE.IONICONS}
            style={styles.IconSecondBlock}
          />
          <Text style={[styles.specText, { color: specsColor }]}>
            {announcement?.condition_formatted}
          </Text>
        </View>
      </View>

      <View style={styles.horizontalSeparator} />
      <View style={styles.characteristicBlock}>
        <View>
          <Text style={styles.characteristicTextLeft}>Type</Text>
        </View>
        <View>
          <Text style={styles.characteristicTextRight}>
            {announcement?.category?.displayValue}
          </Text>
        </View>
      </View>
      <View style={styles.horizontalSeparator} />

      <View style={styles.descriptionSection}>
        <Text category="h6" style={styles.descriptionText}>
          Description
        </Text>
        <Text>{announcement?.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleView: {
    marginVertical: 15,
  },
  titleText: {
    fontWeight: "bold",
    textAlign: "center",
  },
  blockSpecs: {
    flexDirection: "row",
    marginBottom: 5,
    justifyContent: "center",
  },
  firstSpecs: {
    flexDirection: "row",
    alignItems: "center",
  },
  specViewLeft: { marginRight: 20 },
  specText: { fontSize: 15 },
  secondSpecs: {
    flexDirection: "row",
    marginRight: 8,
    alignItems: "center",
  },
  IconSecondBlock: { marginRight: 4 },
  verticalSeparator: {
    borderRightWidth: 2,
    borderRightColor: "#8F9BB3",
    height: 15,
    marginHorizontal: 20,
    top: 2,
  },
  horizontalSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: "#bdc3c7",
    width: "100%",
  },
  characteristicBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  characteristicTextLeft: { marginLeft: 20 },
  characteristicTextRight: { marginRight: 20, fontWeight: "bold" },
  descriptionText: { fontWeight: "bold", marginBottom: 5 },
  descriptionSection: { marginTop: 20, marginHorizontal: 15 },
});

export default MainContent;
