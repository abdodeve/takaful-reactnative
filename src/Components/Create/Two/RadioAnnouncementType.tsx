import React, {Dispatch} from "react";
import { View, StyleSheet, Text } from "react-native";
import { Radio, RadioGroup } from "@ui-kitten/components";

const RadioAnnouncementType = ({setSelectAnnouncementType, selectAnnouncementType}: {setSelectAnnouncementType: Dispatch<number>, selectAnnouncementType: number}) => {

  return (
    <View style={styles.container}>
      <RadioGroup
        style={styles.inlineRadioGroup}
        selectedIndex={selectAnnouncementType}
        onChange={(index) => {
          setSelectAnnouncementType(index);
        }}
      >
        <Radio>Don</Radio>
        <Radio>Demande</Radio>
      </RadioGroup>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  inlineRadioGroup: {
    flexDirection: "row",
  },
  radio: {
    margin: 2,
  },
});

export default RadioAnnouncementType;
