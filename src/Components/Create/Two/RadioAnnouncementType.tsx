import React from "react";
import { View, StyleSheet } from "react-native";
import { Radio, RadioGroup } from "@ui-kitten/components";

const RadioAnnouncementType = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <RadioGroup
        style={styles.inlineRadioGroup}
        selectedIndex={selectedIndex}
        onChange={(index) => setSelectedIndex(index)}
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
