import * as React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Button,
  Text,
  useTheme,
} from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { IconX, ICON_TYPE } from "./src/Icons";
import RootNavigation from "./src/Navigation/RootNavigation";
import { default as theme } from "./src/theme.json";
import { default as mapping } from "./mapping.json";

export const HomeIcon = () => (
  <IconX
    name="search"
    origin={ICON_TYPE.OCTICONS}
    style={{ marginRight: 15 }}
  />
);

const HomeScreen = () => {
  const theme = useTheme();

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </Text>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            fontFamily: "OpenSans-Regular",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </Text>
        <Button accessoryLeft={HomeIcon} status="success">
          Home
        </Button>

        <View style={styles.row}>
          <Text style={styles.text} category="h1">
            H1
          </Text>
          <Text style={styles.text} category="h2">
            H2
          </Text>
          <Text style={styles.text} category="h3">
            H3
          </Text>
          <Text style={styles.text} category="h4">
            H4
          </Text>
          <Text style={styles.text} category="h5">
            H5
          </Text>
          <Text style={styles.text} category="h6">
            H6
          </Text>
        </View>
      </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    margin: 2,
  },
});

export default () => {
  let [fontsLoaded] = useFonts({
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  });
  // let fontsLoaded = true;
  console.log("fontsLoaded===>", fontsLoaded);
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ApplicationProvider
        {...eva}
        theme={eva.light}
        // theme={{ ...eva.light, ...theme }}
        customMapping={mapping}
      >
        {/* <HomeScreen /> */}
        <RootNavigation />
      </ApplicationProvider>
    );
  }
};
