import React, { useState } from "react";
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

export const PhoneIcon = () => (
  <IconX name="phone" color="#fff" origin={ICON_TYPE.FEATHER_ICONS} />
);

const MainContent: React.FC = () => {
  const theme = useTheme();
  // const specsColor = theme["color-basic-600"];
  const specsColor = "#747d8c";

  return (
    <View>
      <View style={styles.titleView}>
        <Text style={styles.titleText} category="h5">
          Pousette double en bon état
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
            Casablanca
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
            12 déc, 09:45
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
          <Text style={[styles.specText, { color: specsColor }]}>Don</Text>
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
          <Text style={[styles.specText, { color: specsColor }]}>32 min</Text>
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
            À bricoler
          </Text>
        </View>
      </View>

      <View style={styles.horizontalSeparator} />
      <View style={styles.characteristicBlock}>
        <View>
          <Text style={styles.characteristicTextLeft}>Type</Text>
        </View>
        <View>
          <Text style={styles.characteristicTextRight}>Electromenager</Text>
        </View>
      </View>
      <View style={styles.horizontalSeparator} />

      <View style={styles.descriptionSection}>
        <Text category="h6" style={styles.descriptionText}>
          Description
        </Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
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
