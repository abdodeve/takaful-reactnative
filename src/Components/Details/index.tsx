import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Button } from "@ui-kitten/components";

import { ScreenProps } from "../../Navigation/Routes";
import GoBack from "./../Shared/GoBack";
import SliderImages from "./SliderImages";
import MainContent from "./MainContent";
import FooterContact from "./FooterContact";
import { IconX, ICON_TYPE } from "../../Icons";
import { Announcement } from "../../Models/Announcement";

export const PhoneIcon = () => (
  <IconX name="phone" color="#fff" origin={ICON_TYPE.FEATHER_ICONS} />
);

type Props = ScreenProps & { announcement?: Announcement };

const Details: React.FC<Props> = ({
  route,
  navigation,
  announcement,
}: Props) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <View style={[styles.container]}>
      <GoBack route={route} navigation={navigation} />
      <ScrollView>
        <SliderImages
          route={route}
          navigation={navigation}
          announcement={announcement}
        />
        <MainContent announcement={announcement} />
      </ScrollView>
      <FooterContact announcement={announcement} />
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
