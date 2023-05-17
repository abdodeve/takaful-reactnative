import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
  View,
  Button,
  ActivityIndicator,
} from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { connect } from "react-redux";

import ANNOUNCEMENTS from "./../../../dummy-data/announcements";
import ItemLeft from "./ItemLeft";
import ItemRight from "./ItemRight";
import { Announcement, SearchFilters, User } from "../../Models";
import { TypeAnnouncement } from "../../Models/TypeAnnouncement";
import { Routes, ScreenProps } from "../../Navigation/Routes";
import announcementsApi from "./../../Api/announcementsApi";
import {
  getAnnouncementsAction,
  setAnnouncementsAction,
} from "../../Store/Announcement/actions";

const deviceHeight = Dimensions.get("window").height;

const Item = ({ item, onPress, route, navigation }) => (
  <Layout style={[styles.item]}>
    <TouchableOpacity onPress={onPress} style={[styles.touchableItem]}>
      <ItemLeft item={item} />
      <ItemRight item={item} route={route} navigation={navigation} />
    </TouchableOpacity>
  </Layout>
);

interface RootState {
  AnnouncementStore: any;
  userDataStore: User;
  SearchFiltersStore: SearchFilters;
}

const mapStateToProps = (state: RootState, ownProps) => ({
  SearchFiltersStore: state.SearchFiltersStore,
  AnnouncementStore: state.AnnouncementStore,
  userDataStore: state.userDataStore,
});

const mapDispatchToProps = (dispatch) => {
  return {
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

const AnnouncementsList: React.FC<ScreenProps & Props> = ({
  route,
  navigation,
  AnnouncementStore,
  userDataStore,
  SearchFiltersStore,
  getAnnouncementsAction,
  setAnnouncementsAction,
}: ScreenProps & Props) => {
  useEffect(() => {
    return () => {
      // unsubscribe;
    };
  }, []);

  function currentAnnouncementsByScreen(): any {
    let data = [];
    switch ((route.params as any).announcementType) {
      case TypeAnnouncement.Donation:
        data = AnnouncementStore.items_donation;
        break;
      case TypeAnnouncement.Request:
        data = AnnouncementStore.items_request;
        break;
      case TypeAnnouncement.DonationUser:
        data = AnnouncementStore.items_donation_user;
        break;
      case TypeAnnouncement.RequestUser:
        data = AnnouncementStore.items_request_user;
        break;
      default:
        break;
    }
    return data;
  }

  const renderItem = ({ item }: { item: Announcement }) => {
    return (
      <Item
        item={item}
        onPress={() => {
          navigation.navigate(Routes.DETAILS_SCREEN, {
            announcement: item,
          } as any);
        }}
        route={route}
        navigation={navigation}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={currentAnnouncementsByScreen()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={async () => {
          const fetchedAnnouncement: Announcement[] =
            await announcementsApi.getAnnouncements({
              type: (route.params as any).announcementType,
              announcementsData: currentAnnouncementsByScreen(),
              userData: userDataStore,
              searchFilters: SearchFiltersStore,
            });
          setAnnouncementsAction(
            fetchedAnnouncement,
            (route.params as any).announcementType,
            false
          );

          // getAnnouncementsAction(
          //   currentAnnouncementsByScreen(),
          //   (route.params as any).announcementType,
          //   false
          // );
        }}
        onEndReachedThreshold={0.1}
        refreshing={false}
        onRefresh={async () => {
          const fetchedAnnouncement: Announcement[] =
            await announcementsApi.getAnnouncements({
              type: (route.params as any).announcementType,
              announcementsData: [],
              userData: userDataStore,
              searchFilters: SearchFiltersStore,
            });
          setAnnouncementsAction(
            fetchedAnnouncement,
            (route.params as any).announcementType,
            true
          );

          // getAnnouncementsAction(
          //   [],
          //   (route.params as any).announcementType,
          //   true
          // );
        }}
        ListFooterComponent={() => {
          return (
            <View style={{ height: 20, marginTop: 6 }}>
              {AnnouncementStore.isFetching && (
                <ActivityIndicator color="#0000ff" />
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginVertical: 6,
    marginHorizontal: 16,
    flex: 1,
    flexDirection: "row",
    borderRadius: 15,
    overflow: "hidden",
    elevation: 3,
  },
  touchableItem: {
    flex: 1,
    flexDirection: "row",
    height: deviceHeight * 0.18,
  },
});

export default connector(AnnouncementsList);
