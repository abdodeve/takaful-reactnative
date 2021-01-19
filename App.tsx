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
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// import rootReducer from "./src/Store/Reducers";
import { rootReducer } from "./src/Store";
import { IconX, ICON_TYPE } from "./src/Icons";
import RootNavigation from "./src/Navigation/RootNavigation";
import { default as theme } from "./src/theme.json";
import { default as mapping } from "./mapping.json";

const store = createStore(rootReducer);

export const HomeIcon = () => (
  <IconX
    name="search"
    origin={ICON_TYPE.OCTICONS}
    style={{ marginRight: 15 }}
  />
);

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
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ApplicationProvider {...eva} theme={eva.light} customMapping={mapping}>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </ApplicationProvider>
    );
  }
};
