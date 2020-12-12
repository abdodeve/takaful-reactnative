import * as React from "react";
import { Text } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout } from "@ui-kitten/components";

import RootNavigation from "./src/Navigation/RootNavigation";
import { View } from "react-native";

const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: "center" }}>
    <Text style={{ textAlign: "center" }}>Hiii</Text>
  </View>
);

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    {/* <HomeScreen /> */}
    <RootNavigation />
  </ApplicationProvider>
);
