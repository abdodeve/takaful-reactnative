import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text, Select, SelectItem } from "@ui-kitten/components";
import { Colors } from "./../../Constants";
import SelectCategory from "./SelectCategory";
import InputCity from "./InputCity";
import RadioAnnouncementType from "./RadioAnnouncementType";
import CheckboxObjectState from "./CheckboxObjectState";

const SearchMain = (props) => {
  return (
    <ScrollView style={styles.mainContent}>
      <View style={{ margin: 10 }}>
        <View style={styles.blockInput}>
          <Text style={styles.label}>Catégorie</Text>
          <SelectCategory />
        </View>
        <View style={styles.blockInput}>
          <Text style={styles.label}>Ville</Text>
          <InputCity />
        </View>
        <View style={styles.blockInput}>
          <Text style={styles.label}>Etat de l'objet</Text>
          <CheckboxObjectState />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContent: { backgroundColor: Colors.tintColor },
  label: { fontWeight: "bold", marginBottom: 5 },
  blockInput: { marginBottom: 10 },
});

export default SearchMain;
