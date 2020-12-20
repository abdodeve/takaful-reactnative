import React, { useState } from "react";
import { StyleSheet } from "react-native";

import AnnouncementsList from "../Components/AnnouncementsList";

import { ScreenProps } from "../Navigation/Routes";

const HomeScreen: React.FC<ScreenProps> = ({
  route,
  navigation,
}: ScreenProps) => {
  return <AnnouncementsList navigation={navigation} route={route} />;
};

const styles = StyleSheet.create({});

export default HomeScreen;
