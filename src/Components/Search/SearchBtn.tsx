import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Text, Input, Button, useTheme } from "@ui-kitten/components";
import { IconX, ICON_TYPE } from "../../Icons";

const SearchScreen = (props) => {
  const theme = useTheme();

  return (
    <View style={styles.searchBtnView}>
      <View>
        <TouchableOpacity
          style={[
            styles.searchTouchable,
            {
              backgroundColor: theme["color-primary-500"],
            },
          ]}
          onPress={() => {
            console.log("Validate");
          }}
        >
          <View style={styles.searchTextIcon}>
            <IconX
              name="search"
              origin={ICON_TYPE.OCTICONS}
              color="#fff"
              size={17}
              style={{ marginRight: 10 }}
            />
            <Text style={styles.searchText}>RECHERCHER</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBtnView: {
    backgroundColor: "#fff",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchTouchable: {
    padding: 7,
    borderRadius: 6,
    width: Dimensions.get("window").width * 0.95,
  },
  searchTextIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchText: { color: "#fff", fontSize: 15 },
});

export default SearchScreen;
