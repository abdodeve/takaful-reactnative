import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox, Layout } from "@ui-kitten/components";

const useCheckboxState = (initialCheck = false) => {
  const [checked, setChecked] = React.useState(initialCheck);
  return { checked, onChange: setChecked };
};

const CheckboxObjectState = () => {
  const newCheckboxState = useCheckboxState();
  const goodCheckboxState = useCheckboxState();
  const mediumCheckboxState = useCheckboxState();
  const tinkerCheckboxState = useCheckboxState();

  return (
    <View style={styles.container}>
      <CheckBox style={styles.checkbox} status="basic" {...newCheckboxState}>
        Comme neuf
      </CheckBox>
      <CheckBox style={styles.checkbox} status="basic" {...goodCheckboxState}>
        Bon état
      </CheckBox>
      <CheckBox style={styles.checkbox} status="basic" {...mediumCheckboxState}>
        Moyen
      </CheckBox>
      <CheckBox style={styles.checkbox} status="basic" {...tinkerCheckboxState}>
        À bricoler
      </CheckBox>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
  checkbox: {
    margin: 2,
    fontSize: 30,
  },
});

export default CheckboxObjectState;
