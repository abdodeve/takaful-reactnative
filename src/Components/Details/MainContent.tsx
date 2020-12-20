import React, { useState } from "react";
import {
  View,
  Image,
  ScrollView,
  useWindowDimensions,
  Linking,
  StyleSheet,
} from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";

import { IconX, ICON_TYPE } from "../../Icons";
import { ScreenProps } from "../../Navigation/Routes";

export const PhoneIcon = () => (
  <IconX name="phone" color="#fff" origin={ICON_TYPE.FEATHER_ICONS} />
);

const MainContent: React.FC = () => {
  const width = useWindowDimensions().width;
  return (
    <View>
      <View style={styles.titleView}>
        <Text style={styles.titleText} category="h5">
          Pousette double en bon état
        </Text>
      </View>
      <View style={styles.blockSpecs}>
        <View style={styles.firstSpecs}>
          <IconX
            name="md-pin"
            color="#7f8c8d"
            size={18}
            origin={ICON_TYPE.IONICONS}
            style={{ marginRight: 4 }}
          />
          <Text style={styles.firstSpecText}>Casablanca</Text>
        </View>
        <View style={styles.firstSpecs}>
          <IconX
            name="clockcircle"
            color="#7f8c8d"
            size={14}
            origin={ICON_TYPE.ANT_ICON}
            style={styles.IconSecondBlock}
          />
          <Text style={styles.firstSpecText}>12 déc, 09:45</Text>
        </View>
      </View>
      <View style={styles.blockSpecs}>
        <View style={styles.secondSpecs}>
          <IconX
            name="md-pin"
            color="#7f8c8d"
            size={18}
            origin={ICON_TYPE.IONICONS}
            style={styles.IconSecondBlock}
          />
          <Text style={styles.textSecondBlock}>Don</Text>
        </View>
        <View style={styles.verticalSeparator} />
        <View style={styles.secondSpecs}>
          <IconX
            name="clockcircle"
            color="#7f8c8d"
            size={14}
            origin={ICON_TYPE.ANT_ICON}
            style={styles.IconSecondBlock}
          />
          <Text style={styles.textSecondBlock}>32 min</Text>
        </View>
        <View style={styles.verticalSeparator} />
        <View style={styles.secondSpecs}>
          <IconX
            name="clockcircle"
            color="#7f8c8d"
            size={14}
            origin={ICON_TYPE.ANT_ICON}
            style={styles.IconSecondBlock}
          />
          <Text style={styles.textSecondBlock}>À bricoler</Text>
        </View>
      </View>
      <View style={styles.horizontalSeparator} />
      <View style={styles.characteristicBlock}>
        <View>
          <Text style={styles.characteristicText}>Type</Text>
        </View>
        <View>
          <Text style={styles.characteristicText}>Electromenager</Text>
        </View>
      </View>
      <View style={styles.horizontalSeparator} />

      <View style={{ marginHorizontal: 15 }}>
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
    marginRight: 8,
    alignItems: "center",
  },
  firstSpecText: { fontSize: 11, color: "#7f8c8d" },
  secondSpecs: {
    flexDirection: "row",
    marginRight: 8,
    alignItems: "center",
  },
  IconSecondBlock: { marginRight: 4 },
  textSecondBlock: { fontSize: 11, color: "#7f8c8d" },
  verticalSeparator: {
    borderRightWidth: 2,
    borderRightColor: "#7f8c8d",
    height: 15,
    marginHorizontal: 20,
    top: 2,
  },
  horizontalSeparator: {
    borderBottomWidth: 2,
    borderBottomColor: "#7f8c8d",
    width: "100%",
  },
  characteristicBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  characteristicText: { marginLeft: 20 },
  descriptionText: { fontWeight: "bold" },
});

export default MainContent;
