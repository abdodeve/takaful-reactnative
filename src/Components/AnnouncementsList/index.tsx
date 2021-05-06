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
    getAnnouncementsAction: (AnnouncementStore, announcementType) => {
      dispatch(getAnnouncementsAction(AnnouncementStore, announcementType));
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
  const [announcementsData, setAnnouncementsData] = useState<Announcement[]>(
    []
  );
  const [isFetching, setIsFetching] = useState<Boolean>(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async (route) => {
      setAnnouncementsData([]);
      await fetchAnnouncements();
    });
    return () => {
      unsubscribe;
    };
  }, [navigation]);

  async function fetchAnnouncements() {
    setIsFetching(true);
    const retrievedAnnouncements = await announcementsApi.getAnnouncements({
      type: (route.params as any).announcementType,
      announcementsData,
    });
    setAnnouncementsData([...announcementsData, ...retrievedAnnouncements]);
    setIsFetching(false);
  }

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
      <FlatList
        data={announcementsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={async () => {
          await fetchAnnouncements();
        }}
        onEndReachedThreshold={0.1}
        refreshing={false}
        onRefresh={() => {
          console.log("onRefresh");
        }}
        ListFooterComponent={() => {
          return (
            <View style={{ height: 20 }}>
              {isFetching && <ActivityIndicator color="#0000ff" />}
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
