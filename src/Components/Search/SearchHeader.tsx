import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input } from "@ui-kitten/components";

import TitleHeader from "./../Shared/TitleHeader";
import { SearchFilters } from "../../Models/SearchFilters";
import { setSearchFiltersAction } from "../../Store/search-filters/actions";
import { SearchFiltersType } from "../../Store/search-filters/types";
import { connect } from "react-redux";

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

const SearchHeader = (props: Props) => {
  const [value, setValue] = React.useState("");

  return (
    <View style={styles.header}>
      <View style={styles.topRow}>
        <View style={styles.filter}>
          <TitleHeader title="Filtrer" />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              console.log("Réinitialiser");
            }}
          >
            <Text>Réinitialiser</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchInputView}>
        <View>
          <Input
            style={[styles.SearchInput]}
            status="primary"
            placeholder="Rechercher"
            value={value}
            onChangeText={(value) => {
              setValue(value);
              props.setSearchFiltersAction({ searchInput: value });
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#fff",
    height: 100,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
  filter: {
    marginTop: 6,
    marginLeft: 60,
  },
  title: { fontWeight: "bold", fontSize: 18 },
  searchInputView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  SearchInput: {
    flex: 1,
    margin: 2,
    width: "95%",
  },
});

export default connector(SearchHeader);
