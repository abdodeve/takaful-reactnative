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

LogBox.ignoreLogs(["Setting a timer"]);

async function creatAnnouncements() {
  try {
    const data: Announcement[] = [];
    const idFirst = 7;
    const NbAnnouncementsToAdd = 2;
    for (let i = idFirst + 1; i <= idFirst + NbAnnouncementsToAdd; i++) {
      let newAnnouncement: Announcement = {
        id: i.toString(),
        user_id: "1",
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        nbImg: 1,
        mainImg: "1",
        city: faker.address.city(),
        type: TypeAnnouncement.Donation,
        created_at: "1617461663000",
      };
      data.push(newAnnouncement);
    }
    console.log({ data });

    for (let element of data) {
      await FirebaseHelper.FirebaseContext.firestore()
        .collection("Announcements")
        .doc(element.id)
        .set(element);
    }
  } catch (error) {
    throw error;
  }
}

async function deleteAnnouncements() {
  try {
    const idFirst = 7;
    const NbAnnouncementsToAdd = 2;
    for (let i = idFirst + 1; i <= idFirst + NbAnnouncementsToAdd; i++) {
      await FirebaseHelper.FirebaseContext.firestore()
        .collection("Announcements")
        .doc(i.toString())
        .delete();
    }
  } catch (error) {
    throw error;
  }
}

export default {
  creatAnnouncements,
  deleteAnnouncements,
};
