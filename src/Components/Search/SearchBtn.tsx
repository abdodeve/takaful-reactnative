import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Text, Input, Button, useTheme } from "@ui-kitten/components";
import { IconX, ICON_TYPE } from "../../Icons";
import { setSearchFiltersAction } from "../../Store/search-filters/actions";
import { SearchFiltersType } from "../../Store/search-filters/types";
import { connect } from "react-redux";
import { SearchFilters } from "../../Models/SearchFilters";

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

const SearchBtn = (props: Props) => {
  const theme = useTheme();

  return (
    <View style={styles.searchBtnView}>
      <View>
        <TouchableOpacity
          style={[
            styles.searchTouchable,
            {
              backgroundColor: theme["color-primary-500"],
            },
          ]}
          onPress={() => {
            console.log("Validate");
            console.log(
              "props.SearchFiltersStore====>",
              props.SearchFiltersStore
            );
          }}
        >
          <View style={styles.searchTextIcon}>
            <IconX
              name="search"
              origin={ICON_TYPE.OCTICONS}
              color="#fff"
              size={17}
              style={{ marginRight: 10 }}
            />
            <Text style={styles.searchText}>RECHERCHER</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBtnView: {
    backgroundColor: "#fff",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchTouchable: {
    padding: 7,
    borderRadius: 6,
    width: Dimensions.get("window").width * 0.95,
  },
  searchTextIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchText: { color: "#fff", fontSize: 15 },
});

export default connector(SearchBtn);
