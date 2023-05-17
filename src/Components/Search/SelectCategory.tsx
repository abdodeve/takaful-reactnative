import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  Select,
  SelectItem,
  IndexPath,
  SelectGroup,
  Button,
} from "@ui-kitten/components";
import { connect } from "react-redux";
import { Colors } from "./../../Constants";
import categories from "./../../../dummy-data/categories";

import { SearchFilters } from "../../Models/SearchFilters";
import { setSearchFiltersAction } from "../../Store/search-filters/actions";
import { SearchFiltersType } from "../../Store/search-filters/types";

interface RootState {
  SearchFiltersStore: SearchFilters;
}

const mapStateToProps = (state: RootState, ownProps) => ({
  SearchFiltersStore: state.SearchFiltersStore,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchFiltersAction: (searchFiltersData: SearchFiltersType) => {
      dispatch(setSearchFiltersAction(searchFiltersData));
    },
  };
};
const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const SelectCategory = (props: Props) => {
  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>(
    new IndexPath(0, 0)
  );
  const [displayValue, setDisplayValue] = React.useState<string>(
    categories[0].data[0].name
  );

  useEffect(() => {
    if (!props.SearchFiltersStore.category) {
      setSelectedIndex(new IndexPath(0, 0));
      setDisplayValue(categories[0].data[0].name);
    }
  }, [props.SearchFiltersStore.category]);

  return (
    <View>
      <Select
        value={displayValue}
        placeholder="Default"
        selectedIndex={selectedIndex}
        onSelect={(index: Partial<IndexPath>) => {
          setSelectedIndex(index as IndexPath);
          setDisplayValue(() => {
            return categories[index.section!].data[index.row!].name;
          });

          if (index.section === 0 && index.row === 0) {
            return props.setSearchFiltersAction({
              category: "",
            });
          }
          props.setSearchFiltersAction({
            category: categories[index.section!].data[index.row!].name,
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

export default connector(SelectCategory);
