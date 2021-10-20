import React, {Dispatch} from "react";
import { View, StyleSheet, Text } from "react-native";
import { Radio, RadioGroup } from "@ui-kitten/components";

const RadioAnnouncementCondition = ({setRadioAnnouncementCondition, radioAnnouncementCondition}: {setRadioAnnouncementCondition: Dispatch<number>, radioAnnouncementCondition: number}) => {

  return (
    <View style={styles.container}>
      <RadioGroup
        style={styles.inlineRadioGroup}
        selectedIndex={radioAnnouncementCondition}
        onChange={(index) => {
          setRadioAnnouncementCondition(index);
        }}
      >
        <Radio>Neuf</Radio>
        <Radio>Bon</Radio>
        <Radio>Moyen</Radio>
        <Radio>À bricoler</Radio>
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

export default RadioAnnouncementCondition;
