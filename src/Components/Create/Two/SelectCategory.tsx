import React, { useState, useEffect, Dispatch } from "react";
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
import { selectCategoryType } from "./types";

export type PropsSelectCategory = { setSelectCategory: Dispatch<number> };

const SelectCategory = ({
  selectCategory,
  setSelectCategory,
}: {
  selectCategory: selectCategoryType;
  setSelectCategory: Dispatch<selectCategoryType>;
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState<
    IndexPath | IndexPath[]
  >(new IndexPath(0, 1));

  return (
    <View>
      <Select
        value={selectCategory}
        placeholder="Default"
        selectedIndex={selectedIndex}
        onSelect={(index: Partial<IndexPath>) => {
          const label = categories[index.section!].data[index.row!].name;
          setSelectCategory(label);
          setSelectedIndex(index as any);
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
