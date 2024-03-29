import React, {Dispatch} from "react";
import { View, StyleSheet, Text } from "react-native";
import { Radio, RadioGroup } from "@ui-kitten/components";

const RadioAnnouncementType = ({setRadioAnnouncementType, radioAnnouncementType}: {setRadioAnnouncementType: Dispatch<number>, radioAnnouncementType: number}) => {

  return (
    <View style={styles.container}>
      <RadioGroup
        style={styles.inlineRadioGroup}
        selectedIndex={radioAnnouncementType}
        onChange={(index) => {
          setRadioAnnouncementType(index);
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
