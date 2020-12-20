import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import { ScreenProps } from "../../Navigation/Routes";
import SliderImages from "./SliderImages";
import MainContent from "./MainContent";
import FooterContact from "./FooterContact";

const Details: React.FC<ScreenProps> = ({ route, navigation }: ScreenProps) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SliderImages />
        <MainContent />
      </ScrollView>
      <FooterContact />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Details;
