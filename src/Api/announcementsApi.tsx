import axios from "axios";
import * as Google from "expo-google-app-auth";
import * as firebase from "firebase";
import "firebase/firestore";
import { LogBox } from "react-native";
import moment from "moment";
import "moment/locale/fr"; // without this line it didn't work
import { Announcement } from "./../Models/Announcement";

import { ANDROID_CLIENT_ID } from "./../Config";
import FirebaseHelper from "./../Utils/FirebaseHelper";
import AnnouncementsUtil from "./../Utils/Announcements";

LogBox.ignoreLogs(["Setting a timer"]);

enum TypeAnnouncement {
  Donation = "DONATION",
  Request = "REQUEST",
}

async function getAnnouncements({
  type = TypeAnnouncement.Donation,
  announcementsStore,
}) {
  try {
    const field = "id";
    const pageSize = 6;

    let query: firebase.firestore.Query;
    let collectionReference: firebase.firestore.CollectionReference = FirebaseHelper.FirebaseContext.firestore().collection(
      "Announcements"
    );
    query = collectionReference.orderBy(
      firebase.firestore.FieldPath.documentId(),
      "desc"
    );
    query = query.where("type", "==", type);
    query = query.limit(pageSize);

    // Paginate to the next page
    if (announcementsStore.items.length > 0) {
      query = query.startAfter(
        announcementsStore.items[announcementsStore.items.length - 1].id
      );
    }
    let snapshot: firebase.firestore.QuerySnapshot;
    snapshot = await query.get();

    if (
      !snapshot ||
      typeof snapshot == "undefined" ||
      typeof snapshot.docs == "undefined"
    )
      return [];

    let announcements = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    const announcementsNormalized: Announcement[] = await AnnouncementsUtil.normalizeAnnouncements(
      announcements
    );

    return announcementsNormalized;
  } catch (error) {
    console.error({ error });
    return error;
  }
}

export default {
  getAnnouncements,
};
