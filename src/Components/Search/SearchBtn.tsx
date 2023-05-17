import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Text, Input, Button, useTheme } from "@ui-kitten/components";
import { useNavigation, useRoute } from "@react-navigation/native";

import { IconX, ICON_TYPE } from "../../Icons";
import { setSearchFiltersAction } from "../../Store/search-filters/actions";
import { SearchFiltersType } from "../../Store/search-filters/types";
import { connect } from "react-redux";
import { SearchFilters } from "../../Models/SearchFilters";
import {
  getAnnouncementsAction,
  setAnnouncementsAction,
} from "../../Store/Announcement/actions";
import { TypeAnnouncement } from "../../Models/TypeAnnouncement";
import { Announcement, User } from "../../Models";
import announcementsApi from "../../Api/announcementsApi";
import { formatDate } from "../../Utils/Announcements";

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
    getAnnouncementsAction: (AnnouncementStore, announcementType, refresh) => {
      dispatch(
        getAnnouncementsAction(AnnouncementStore, announcementType, refresh)
      );
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

const SearchBtn = (props: Props) => {
  const theme = useTheme();
  const route = useRoute();
  const navigation = useNavigation();

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
          onPress={async () => {
            let fetchedAnnouncement: Announcement[] =
              await announcementsApi.getAnnouncements({
                type: "DONATION",
                announcementsData: [],
                userData: props.userDataStore,
                searchFilters: props.SearchFiltersStore,
              });
            props.setAnnouncementsAction(fetchedAnnouncement, "DONATION", true);
            navigation.goBack();
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
