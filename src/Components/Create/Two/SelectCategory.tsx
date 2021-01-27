import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  Select,
  SelectItem,
  IndexPath,
  SelectGroup,
  Button,
} from "@ui-kitten/components";
import { Colors } from "../../../Constants";
import categories from "../../../../dummy-data/categories";

const SelectCategory = (props) => {
  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>(
    new IndexPath(0, 0)
  );
  const [displayValue, setDisplayValue] = React.useState<string>(
    categories[0].data[0].name
  );

  useEffect(() => {});

  return (
    <View>
      <Select
        value={displayValue}
        placeholder="Default"
        selectedIndex={selectedIndex}
        onSelect={(index: Partial<IndexPath>) => {
          setSelectedIndex(index as IndexPath);
          console.log("onSelect==>index==>", index);
          setDisplayValue(() => {
            return categories[index.section!].data[index.row!].name;
          });
        }}
      >
        {categories.map((categoryValue, categoryIndex) => {
          return (
            <SelectGroup key={categoryIndex} title={categoryValue.groupTitle}>
              {categoryValue.data.map((itemValue, itemIndex) => {
                return <SelectItem key={itemIndex} title={itemValue.name} />;
              })}
            </SelectGroup>
          );
        })}
      </Select>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContent: { backgroundColor: Colors.tintColor },
  label: { fontWeight: "bold", marginBottom: 5 },
  blockInput: { marginBottom: 10 },
});

export default SelectCategory;
