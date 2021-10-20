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

// export type PropsSelectCategory = {setSelectCategory: (category_id: number)=> any} ;
export type PropsSelectCategory = { setSelectCategory: Dispatch<number> };

const SelectCategory = ({
  selectCategory,
  setSelectCategory,
}: {
  selectCategory: selectCategoryType;
  setSelectCategory: Dispatch<selectCategoryType>;
}) => {
  const [displayValue, setDisplayValue] = React.useState<string>(
    categories[0].data[0].name
  );

  useEffect(() => {
    setDisplayValue(() => {
      return categories[selectCategory.indexPath.section!].data[
        selectCategory.indexPath.row!
      ].name;
    });
  }, [selectCategory]);

  return (
    <View>
      <Select
        value={displayValue}
        placeholder="Default"
        selectedIndex={selectCategory.indexPath}
        onSelect={(index: Partial<IndexPath>) => {
          console.log("index===>", index);
          setSelectCategory({
            indexPath: index as IndexPath,
            value: categories[index.section!].data[index.row!].name,
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
