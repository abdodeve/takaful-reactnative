import axios from "axios";
import * as Google from "expo-google-app-auth";
import * as firebase from "firebase";
import "firebase/firestore";
import { LogBox } from "react-native";
import moment from "moment";
import faker from "faker";
import { Announcement } from "../Models";
import { TypeAnnouncement } from "../Models/TypeAnnouncement";

import { ANDROID_CLIENT_ID } from "../Config";
import FirebaseHelper from "./FirebaseHelper";
import AnnouncementsUtil from "./Announcements";
import announcementsApi from "./../Api/announcementsApi";
import { setAnnouncementsAction } from "./../Store/Announcement/actions";

LogBox.ignoreLogs(["Setting a timer"]);

async function loadAnnouncements(store) {
  try {
    for (let item in TypeAnnouncement) {
      let fetchedAnnouncement: Announcement[] = await announcementsApi.getAnnouncements(
        { type: TypeAnnouncement[item], announcementsData: [] }
      );
      store.dispatch(
        setAnnouncementsAction(
          fetchedAnnouncement,
          TypeAnnouncement[item],
          true
        )
      );
    }
  } catch (error) {
    throw error;
  }
}

export default {
  loadAnnouncements,
};
