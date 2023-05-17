import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input } from "@ui-kitten/components";
import { useNavigation, useRoute } from "@react-navigation/native";

import TitleHeader from "./../Shared/TitleHeader";
import { SearchFilters } from "../../Models/SearchFilters";
import {
  setSearchFiltersAction,
  resetSearchFiltersAction,
} from "../../Store/search-filters/actions";
import {
  getAnnouncementsAction,
  setAnnouncementsAction,
} from "../../Store/Announcement/actions";
import { SearchFiltersType } from "../../Store/search-filters/types";
import { connect } from "react-redux";
import { Announcement } from "../../Models/Announcement";
import announcementsApi from "../../Api/announcementsApi";
import { User } from "../../Models";
import { initialStateSearchFilter } from "../../Store/search-filters/reducers";

interface RootState {
  SearchFiltersStore: SearchFilters;
  userDataStore: User;
}

const mapStateToProps = (state: RootState, ownProps) => ({
  SearchFiltersStore: state.SearchFiltersStore,
  userDataStore: state.userDataStore,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchFiltersAction: (searchFiltersData: SearchFiltersType) => {
      dispatch(setSearchFiltersAction(searchFiltersData));
    },
    resetSearchFiltersAction: () => {
      dispatch(resetSearchFiltersAction());
    },
    setAnnouncementsAction: (AnnouncementStore, announcementType, refresh) => {
      dispatch(
        setAnnouncementsAction(AnnouncementStore, announcementType, refresh)
      );
    },
  };
};
const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const SearchHeader = (props: Props) => {
  const [value, setValue] = React.useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.topRow}>
        <View style={styles.filter}>
          <TitleHeader title="Filtrer" />
        </View>
        <View>
          <TouchableOpacity
            onPress={async () => {
              props.resetSearchFiltersAction();
              let fetchedAnnouncement: Announcement[] =
                await announcementsApi.getAnnouncements({
                  type: "DONATION",
                  announcementsData: [],
                  userData: props.userDataStore,
                  searchFilters: initialStateSearchFilter,
                });
              props.setAnnouncementsAction(
                fetchedAnnouncement,
                "DONATION",
                true
              );
              navigation.goBack();
            }}
          >
            <Text>Réinitialiser</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.searchInputView}>
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
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#fff",
    height: 55,
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
