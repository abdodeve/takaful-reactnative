import axios from "axios";
import * as Google from "expo-google-app-auth";
import * as firebase from "firebase";
import "firebase/firestore";
import { LogBox } from "react-native";
import moment from "moment";
import "moment/locale/fr";
import { Announcement } from "./../Models";
import { TypeAnnouncement } from "./../Models/TypeAnnouncement";

import { ANDROID_CLIENT_ID } from "./../Config";
import FirebaseHelper from "./../Utils/FirebaseHelper";
import AnnouncementsUtil from "./../Utils/Announcements";

LogBox.ignoreLogs(["Setting a timer"]);

async function getAnnouncements({
  type,
  subType,
  announcementsData,
  userData,
}: {
  type: any;
  subType?: any;
  announcementsData: any;
  userData?: any;
}) {
  try {
    const field = "id";
    const pageSize = 6;

    let query: firebase.firestore.Query;
    let collectionReference: firebase.firestore.CollectionReference =
      FirebaseHelper.FirebaseContext.firestore().collection("Announcements");
    query = collectionReference.orderBy(
      firebase.firestore.FieldPath.documentId(),
      "desc"
    );
    const typeSanitized = AnnouncementsUtil.sanitizeType(type);
    query = query.where("type", "==", typeSanitized);

    // If the user not connected return
    // an empty array for announcementsUser
    if (
      [TypeAnnouncement.DonationUser, TypeAnnouncement.RequestUser].includes(
        type
      ) &&
      !userData
    )
      return [];

    // If the user connected return announcementsUser by User
    if (
      [TypeAnnouncement.DonationUser, TypeAnnouncement.RequestUser].includes(
        type
      ) &&
      userData
    ) {
      query = query.where("user_id", "==", userData.id);
    }
    query = query.limit(pageSize);

    // Paginate to the next page
    if (announcementsData.length > 0) {
      query = query.startAfter(
        announcementsData[announcementsData.length - 1].id
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

    let announcements: Announcement[] = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    }) as Announcement[];

    const announcementsNormalized: Announcement[] =
      await AnnouncementsUtil.normalizeAnnouncements(announcements);

    return announcementsNormalized;
  } catch (error) {
    throw error;
  }
}

export default {
  getAnnouncements,
};
