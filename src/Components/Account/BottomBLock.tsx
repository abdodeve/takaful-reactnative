import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Text, Input, Button, useTheme } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import { IconX, ICON_TYPE } from "../../Icons";
import BottomBtn from "../Shared/BottomBtn";
import { Routes } from "../../Navigation/Routes";
import { userDataType } from "../../Store/UserData/types";

interface RootState {
  userDataStore: userDataType;
}

const mapStateToProps = (state: RootState, ownProps) => ({
  userDataStore: state.userDataStore,
  ownProps: ownProps,
});

const connector = connect(mapStateToProps);
type Props = ReturnType<typeof mapStateToProps>;

const RenderIcon = ({ name }: { name: string }) => {
  return (
    <IconX
      name={name}
      origin={ICON_TYPE.ANT_ICON}
      color="#fff"
      size={21}
      style={{ marginRight: 10 }}
    />
  );
};

const BottomBLock: React.FC<Props> = ({ userDataStore }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.bottomBtnView}>
      <View
        style={{
          marginHorizontal: 8,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.leftView}>
          <BottomBtn
            title="ANNULER"
            onPress={() => {
              console.log("ANNULER");
              navigation.navigate(Routes.DONATIONS_STACK);
            }}
            color={theme["color-basic-500"]}
            IconBtn={<RenderIcon name="closecircleo" />}
          />
        </View>
        <View style={styles.rightView}>
          <BottomBtn
            title="VALIDER"
            onPress={() => {
              console.log("VALIDER");
              navigation.navigate(Routes.DONATIONS_STACK);
            }}
            color={theme["color-primary-500"]}
            IconBtn={<RenderIcon name="checkcircleo" />}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leftView: { flex: 1, marginRight: 6 },
  rightView: { flex: 1 },
  bottomBtnView: {
    backgroundColor: "#fff",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default connector(BottomBLock);
