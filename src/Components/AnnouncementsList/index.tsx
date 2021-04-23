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
import { Announcement } from "../../Models";
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
}

const mapStateToProps = (state: RootState, ownProps) => ({
  AnnouncementStore: state.AnnouncementStore,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAnnouncementsAction: (AnnouncementStore) => {
      dispatch(getAnnouncementsAction(AnnouncementStore));
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
  getAnnouncementsAction,
}: ScreenProps & Props) => {
  useEffect(() => {
    getAnnouncementsAction(AnnouncementStore);
    return () => {
      // cleanup
    };
  }, []);

  const renderItem = ({ item }: { item: Announcement }) => {
    return (
      <Item
        item={item}
        onPress={() => {
          navigation.navigate(Routes.DETAILS_SCREEN);
        }}
        route={route}
        navigation={navigation}
      />
    );
  };

  return (
    <View>
      {/* <Text>{JSON.stringify(AnnouncementStore)}</Text> */}
      <FlatList
        data={AnnouncementStore.items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={() => {
          getAnnouncementsAction(AnnouncementStore);
        }}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => {
          return (
            <View style={{ height: 20 }}>
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
