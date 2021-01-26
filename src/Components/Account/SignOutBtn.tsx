import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Text, Input, Button, useTheme } from "@ui-kitten/components";
import { IconX, ICON_TYPE } from "../../Icons";

const SignOutBtn = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={[styles.signOutTouchable]}
          onPress={() => {
            console.log("Sign out");
          }}
        >
          <View style={styles.signOutTextIcon}>
            <View style={styles.viewLeft}>
              <IconX
                name="logout"
                origin={ICON_TYPE.ANT_ICON}
                color="#000"
                size={20}
                style={{ marginRight: 25 }}
              />
              <Text style={styles.signOutText}>Se déconnecter</Text>
            </View>
            <View style={styles.iconRight}>
              <IconX
                name="arrow-forward"
                origin={ICON_TYPE.MATERIAL_ICONS}
                color="#000"
                size={20}
                style={{ marginRight: 10 }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signOutTouchable: {
    padding: 15,
    width: Dimensions.get("window").width * 0.95,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
  },
  signOutTextIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signOutText: { color: "#000", fontSize: 18, fontWeight: "bold" },
  viewLeft: {
    flex: 2,
    alignItems: "center",
    flexDirection: "row",
  },
  iconRight: {
    alignItems: "flex-end",
    flex: 1,
  },
});

export default SignOutBtn;
