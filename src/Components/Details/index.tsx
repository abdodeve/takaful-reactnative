import React, { useState } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Button } from "@ui-kitten/components";

import { ScreenProps } from "../../Navigation/Routes";
import GoBack from "./GoBack";
import SliderImages from "./SliderImages";
import MainContent from "./MainContent";
import FooterContact from "./FooterContact";
import { IconX, ICON_TYPE } from "../../Icons";

export const PhoneIcon = () => (
  <IconX name="phone" color="#fff" origin={ICON_TYPE.FEATHER_ICONS} />
);

const Details: React.FC<ScreenProps> = ({ route, navigation }: ScreenProps) => {
  return (
    <View style={[styles.container]}>
      <GoBack route={route} navigation={navigation} />
      <ScrollView>
        <SliderImages route={route} navigation={navigation} />
        <MainContent />
      </ScrollView>
      <FooterContact />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
});

export default Details;
